const Footer = () => {
  const luis = {
    name: "Luis",
    linkedInHandle: "https://www.linkedin.com/in/luis-ramos1/",
  }
  const nicole = {
    name: "Nicole",
    linkedInHandle: "https://www.linkedin.com/in/nicole-mares-rivera",
  }
  const sean = {
    name: "Sean",
    linkedInHandle: "https://www.linkedin.com/in/sean-wallace-62b57a164/",
  }
  const venessa = {
    name: "Venessa",
    linkedInHandle: "https://www.linkedin.com/in/venessa-palmer-855038225/",
  }

  return (
    <>
      <footer>
        ~ &nbsp; Creators: &nbsp;&nbsp;
        <a href={luis.linkedInHandle} target="_blank" rel="noreferrer">
          {luis.name}
        </a>{" "}
        &nbsp; ,
        <a href={nicole.linkedInHandle} target="_blank" rel="noreferrer">
          {" "}
          {nicole.name}
        </a>{" "}
        &nbsp; ,
        <a href={sean.linkedInHandle} target="_blank" rel="noreferrer">
          {sean.name}
        </a>{" "}
        &nbsp; ,
        <a href={venessa.linkedInHandle} target="_blank" rel="noreferrer">
          {venessa.name}
        </a>{" "}
        &nbsp; &nbsp;~
        <br /> 2022
      </footer>
    </>
  )
}

export default Footer
