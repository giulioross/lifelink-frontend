import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 text-white p-6 font-sans">
      <header className="text-center mb-10">
        <h1 className="text-5xl font-bold mb-2 drop-shadow-lg">🌐 LifeLink</h1>
        <p className="text-lg italic">Il tuo assistente personale superconnesso 🚀</p>
      </header>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { title: "📅 Calendario", desc: "Gestisci i tuoi appuntamenti in un solo posto." },
          { title: "✅ To-Do List", desc: "Organizza i tuoi obiettivi giornalieri." },
          { title: "📧 Email", desc: "Controlla e invia mail senza cambiare app." },
          { title: "💬 Messaggistica", desc: "Comunica rapidamente con tutti i tuoi contatti." },
          { title: "💰 Finanza", desc: "Controlla spese, entrate e notifiche automatiche." },
          { title: "🛒 Acquisti", desc: "Tieniti aggiornato con la tua lista spesa intelligente." },
        ].map((card, i) => (
          <div key={i} className="bg-white/10 rounded-2xl p-6 shadow-xl hover:scale-105 transition transform duration-300">
            <h2 className="text-2xl font-semibold mb-2">{card.title}</h2>
            <p className="text-sm text-white/90">{card.desc}</p>
          </div>
        ))}
      </section>

      <footer className="text-center mt-12 text-white/70 text-sm">Made with ❤️ by LifeLink Team – Tutto connesso, tutto tuo.</footer>
    </div>
  );
};

export default App;
