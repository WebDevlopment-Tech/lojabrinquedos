const Contato = () => {
    return (
        <main className="grow flex items-center justify-center px-4">
            <div className="bg-[#fcda90] p-8 sm:p-10 rounded-[20px] w-full max-w-md shadow-2xl border-2 border-[#fe9c6b]">

                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#af0745] text-center mb-6 uppercase tracking-wider">
                    Fale Conosco
                </h2>

                <p className="text-[#fa4069] text-center mb-6">
                    Entre em contato conosco através de:
                </p>

                <a
                    href="mailto:suporte@lojagamer.com"
                    className="block text-center text-[#af0745] font-semibold hover:underline transition-all"
                >
                    suporte@lojagamer.com
                </a>

                <a 
                    href="+5511999999999"
                    className="block text-center text-[#af0745] font-semibold hover:underline transition-all"
                >
                    Telefone
                </a>

                <a
                    href="https://wa.me/5511999999999"
                    className="block text-center text-[#af0745] font-semibold hover:underline transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    WhatsApp
                </a>

                <a 
                    href="https://www.instagram.com/lojabrinquedo"
                    className="block text-center text-[#af0745] font-semibold hover:underline transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Instagram
                </a>



            </div>
        </main>
    )
}

export default Contato
