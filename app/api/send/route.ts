import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  const { nome, empresa, email, whatsapp, faturamento, segmento, momento } = body;

  if (!nome || !empresa || !email || !whatsapp || !faturamento || !segmento || !momento) {
    return NextResponse.json({ error: 'Campos obrigatórios faltando.' }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: 'Site Gentil Digital <onboarding@resend.dev>',
    to: 'renato@gentildigital.com.br',
    subject: `Novo lead: ${nome} — ${empresa}`,
    html: `
      <h2>Novo lead via formulário do site</h2>
      <table cellpadding="8" style="border-collapse:collapse; font-family:sans-serif; font-size:14px;">
        <tr><td><strong>Nome</strong></td><td>${nome}</td></tr>
        <tr><td><strong>Empresa</strong></td><td>${empresa}</td></tr>
        <tr><td><strong>Email</strong></td><td>${email}</td></tr>
        <tr><td><strong>WhatsApp</strong></td><td>${whatsapp}</td></tr>
        <tr><td><strong>Faturamento</strong></td><td>${faturamento}</td></tr>
        <tr><td><strong>Segmento</strong></td><td>${segmento}</td></tr>
        <tr><td><strong>Momento</strong></td><td>${momento}</td></tr>
      </table>
    `,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
