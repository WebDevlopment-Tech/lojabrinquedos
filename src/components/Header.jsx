
const Header = () => {
  return (
    <header className="flex justify-between items-center py-6 px-[5%] bg-[#af0745]">
        <h1 className="p-2 text-[#fcda90] text-3xl font-medium">Loja de Brinquedos</h1>
        <nav>
            <ul className="flex list-none items-center gap-8">
                <li className="text-[#fcda90] cursor-pointer hover:text-lg transition-all">Home</li>
                  <li className="text-[#fcda90] cursor-pointer hover:text-lg transition-all">Contato</li>
                  <li className="text-[#fcda90] cursor-pointer hover:text-lg transition-all">Sobre</li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
