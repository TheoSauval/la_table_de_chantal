import Header from '../component/Header/page';
import Footer from '../component/Footer/page';
import FormContact from '../component/FormContact';

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-emerald-950 text-white">
            <Header />
            <main className="px-6 py-16 flex flex-col gap-12 items-center">
                <h1 className="text-4xl font-bold text-rose-400">Contactez-nous</h1>
                <FormContact />
                <div className="text-center">
                    <p>📍 25 Rue de la Cuisine, 75000 Paris</p>
                    <p>📞 01 23 45 67 89</p>
                </div>
                <iframe
                    title="Carte de La Table de Chantal"
                    className="w-full max-w-3xl h-64 rounded-xl border-0"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2620.9171691291053!2d2.370939076927823!3d48.864397571338315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66df508103ec3%3A0x9050d4bff2872653!2s25%20Rue%20Oberkampf%2C%2075011%20Paris!5e0!3m2!1sfr!2sfr!4v1715363359037!5m2!1sfr!2sfr"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </main>
            <Footer />
        </div>
    );
}