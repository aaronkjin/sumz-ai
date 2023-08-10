const Hero = () => {
  return (
    <header className="
      w-full
      flex
      justify-center
      items-center
      flex-col
    ">
      <nav className="
        flex
        justify-between
        items-center
        w-full
        mb-10
        pt-3
      ">
        <img src="../../favicon.ico" alt="Sumz.ai Logo" className="w-28 object-contain" />
      </nav>

      <h1 className="head_text">
        Digest Knowledge with <br className="max-md:hidden" />
        <span className="orange_gradient">Sumz.ai</span>
      </h1>
      <h2 className="desc">
        Elevate your reading experience with lightning-fast article summaries, powered by GPT-4
      </h2>
    </header>
  )
}

export default Hero
