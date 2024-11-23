import bus from '../assets/bus.jpg';

interface Props {
  heading: string;
  info: string;
}

const ServiceCard = ({ heading, info }: Props) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg shadow-slate-400 flex flex-col h-full">
      <a href="#">
        <img className="rounded-t-lg w-full h-48 object-cover" src={bus} alt="Bus" />
      </a>
      <div className="p-5 flex flex-col justify-between flex-grow">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">{heading}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 text-center">{info}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
