const Pig = () => {
  const logoPath = "/butcherPig.png"
  return (
    <>
      {/* <img
        src="https://images.unsplash.com/photo-1587213128862-80345e23a71a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGlnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
        alt=" a cute piggy"
      /> */}
      <img
        src={logoPath}
        alt="pig with butcher cut names in pig latin"
        className="butcherPig"
      />
    </>
  )
}

export default Pig
