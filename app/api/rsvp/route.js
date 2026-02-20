import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { nombre, asistencia } = await request.json();

    const text = `
🎉 *NUEVA CONFIRMACIÓN* 🎉
👤 *Nombre:* ${nombre}
✅ *Viene:* ${asistencia ? 'SI ✅' : 'NO ❌'}
    `;

    console.log("👉 Intentando conectar con Telegram...");

    const url = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;

    const telegramResponse = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: text,
        parse_mode: 'Markdown',
      }),
    });

    const data = await telegramResponse.json();

    if (!telegramResponse.ok) {
      console.error("❌ TELEGRAM RECHAZÓ EL MENSAJE:", data);
      return NextResponse.json({ success: false, error: 'Rechazado por Telegram' }, { status: 500 });
    }

    console.log("✅ ¡EXITO! Mensaje enviado a tu celular");
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("❌ ERROR FATAL DE RED:", error);
    return NextResponse.json({ success: false, error: 'Error de red' }, { status: 500 });
  }
}