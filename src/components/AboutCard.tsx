interface Props {
    title: string;
    info: string;
    bg: string;
    color: string;
    rotate: string;
  }
  
  const AboutCard = ({ title, info, bg, color, rotate }: Props) => {
    return (
      <div className="m-9">
        <a
          href="#"
          className={`block max-w-sm p-6 ${bg} border border-gray-200 rounded-lg shadow-md ${rotate}`}
        >
          <h5
            className={`mb-2 text-2xl font-bold tracking-tight text-center ${color}`}
          >
            {title}
          </h5>
          <p className={`font-normal ${color} text-center`}>{info}</p>
        </a>
      </div>
    );
  };
  
  export default AboutCard;
  