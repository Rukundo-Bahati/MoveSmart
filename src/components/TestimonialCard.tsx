interface TestimonialCardProps {
    name: string;
    review: string;
    rating: number;
    role: string; 
    imageUrl: string; 
  }
  
  const TestimonialCard = ({ name, review, rating, role, imageUrl }: TestimonialCardProps) => {
    return (
        <div className="flex items-center justify-center mb-5">
      <div className="p-4 border rounded-xl overflow-hidden shadow-lg shadow-slate-500 text-xl lg:w-1/2">
        {/* Upper Section: Comment */}
        <div className="mb-4">
          <p className="text-gray-600">{review}</p>
          <div className="text-yellow-500 mt-2">Rating: {rating} ⭐</div>
        </div>
  
        {/* Horizontal line */}
        <div className="border-t border-dark mb-4"></div>
  
        {/* Lower Section: Image with Name and Role */}
        <div className="flex items-center gap-4">
          <img
            src={imageUrl}
            alt={name}
            className="w-16 h-16 rounded-full border-2 border-gray-300"
          />
          <div>
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
      </div>
      </div>
    );
  };
  
  export default TestimonialCard;
  