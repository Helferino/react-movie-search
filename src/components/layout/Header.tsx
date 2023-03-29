interface Props {
  title: string
}

const Header = ({ title }: Props) => {
  return (
    <div className="header">
      <h2>{title}</h2>
    </div>
  )
}

export default Header;
