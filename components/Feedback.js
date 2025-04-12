
// import { useState } from "react";
// import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

// export default function FeedbackForm() {
//   const [feedback, setFeedback] = useState(null);
//   const [imagePreview, setImagePreview] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     designation: "",
//     review: "",
//     rating: 5,
//     image: null,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: name === "rating" ? parseFloat(value) : value,
//     }));
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setFormData((prev) => ({ ...prev, image: file }));
//       setImagePreview(URL.createObjectURL(file));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFeedback({ ...formData, image: imagePreview });
//   };

//   const renderStars = (rating) => {
//     const fullStars = Math.floor(rating);
//     const halfStar = rating % 1 >= 0.5;
//     const stars = [];

//     for (let i = 0; i < fullStars; i++) stars.push(<FaStar key={i} />);
//     if (halfStar) stars.push(<FaStarHalfAlt key="half" />);
//     while (stars.length < 5) stars.push(<FaRegStar key={`empty-${stars.length}`} />);
//     return stars;
//   };

//   return (
//     <div className="max-w-4xl mx-auto px-4 py-8">
//       {/* Dynamic Feedback Card */}
//       {feedback && (
//         <div className="mt-8 bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 mb-8">
//           <img
//             src={feedback.image}
//             alt={feedback.name}
//             className="w-24 h-24 rounded-full border-4 border-orange-500 object-cover aspect-square"
//           />
//           <div className="text-center md:text-left">
//             <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
//               {feedback.name}
//             </h3>
//             <p className="text-sm text-gray-500 dark:text-gray-300">
//               {feedback.designation}
//             </p>

//             <div className="flex justify-center md:justify-start items-center mt-2 text-yellow-400">
//               {renderStars(feedback.rating)}
//             </div>

//             <p className="mt-4 text-gray-700 dark:text-gray-200 relative">
//               <span className="text-yellow-400 text-3xl absolute -left-4 -top-2">“</span>
//               {feedback.review}
//               <span className="text-yellow-400 text-3xl absolute -bottom-2">”</span>
//             </p>
//           </div>
//         </div>
//       )}
//       {/* Form */}
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white dark:bg-gray-900 shadow-md rounded-2xl p-6 space-y-4"
//       >
//         <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Submit Feedback</h2>

//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           className="w-full p-2 rounded border dark:bg-gray-800 dark:text-white"
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="designation"
//           placeholder="Designation"
//           className="w-full p-2 rounded border dark:bg-gray-800 dark:text-white"
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="file"
//           accept="image/*"
//           className="w-full p-2 rounded border dark:bg-gray-800 dark:text-white"
//           onChange={handleImageChange}
//           required
//         />
//         <textarea
//           name="review"
//           placeholder="Write your feedback..."
//           rows="4"
//           className="w-full p-2 rounded border dark:bg-gray-800 dark:text-white"
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="number"
//           name="rating"
//           placeholder="Rating (1-5)"
//           min="1"
//           max="5"
//           step="0.5"
//           className="w-full p-2 rounded border dark:bg-gray-800 dark:text-white"
//           onChange={handleChange}
//           required
//         />
//         <button
//           type="submit"
//           className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
//         >
//           Submit
//         </button>
//       </form>

      
//     </div>
//   );
// }

// {/* <div className="max-w-4xl mx-auto px-4 py-8">
//   <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
//     <img
//       src="https://randomuser.me/api/portraits/men/32.jpg"
//       alt="John Doe"
//       className="w-24 h-24 rounded-full border-4 border-orange-500 object-cover"
//     />
//     <div className="text-center md:text-left">
//       <h3 className="text-xl font-semibold text-gray-800 dark:text-white">John Doe</h3>
//       <p className="text-sm text-gray-500 dark:text-gray-300">CEO, Acme Corp</p>

//       {/* Star Rating */}
//       <div className="flex justify-center md:justify-start items-center mt-2 text-yellow-400">
//         <FaStar />
//         <FaStar />
//         <FaStar />
//         <FaStar />
//         <FaStarHalfAlt />
//       </div>

//       <p className="mt-4 text-gray-700 dark:text-gray-200 relative">
//         <span className="text-yellow-400 text-3xl">“</span>
//         Working with this B2B platform streamlined our procurement process. The support team is highly responsive and the entire workflow is transparent and reliable.
//         <span className="text-yellow-400 text-3xl absolute -bottom-2">”</span>
//       </p>
//     </div>
//   </div>
// </div> */}

 
// import { useState } from "react";
// import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

// export default function FeedbackForm() {
//   const [feedbacks, setFeedbacks] = useState([]);
//   const [imagePreview, setImagePreview] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     designation: "",
//     review: "",
//     rating: 5,
//     image: null,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: name === "rating" ? parseFloat(value) : value,
//     }));
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setFormData((prev) => ({ ...prev, image: file }));
//       setImagePreview(URL.createObjectURL(file));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newFeedback = {
//       ...formData,
//       image: imagePreview,
//     };
//     setFeedbacks((prev) => [newFeedback, ...prev]);
//     setFormData({
//       name: "",
//       designation: "",
//       review: "",
//       rating:"",
//       image: null,
//     });
//     setImagePreview(null);
//   };

//   const renderStars = (rating) => {
//     const fullStars = Math.floor(rating);
//     const halfStar = rating % 1 >= 0.5;
//     const stars = [];

//     for (let i = 0; i < fullStars; i++) stars.push(<FaStar key={i} />);
//     if (halfStar) stars.push(<FaStarHalfAlt key="half" />);
//     while (stars.length < 5) stars.push(<FaRegStar key={`empty-${stars.length}`} />);
//     return stars;
//   };

//   return (
//     <div className=" px-4 py-8 flex flex-col md:flex-row gap-8">
//       {/* Left side: Feedback Cards */}
//       <div className="md:w-1/2 ">
//         <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
//           What People Say
//         </h2>
//         <div className="max-h-[600px] overflow-y-auto space-y-6 pr-2 scrollbar-thin scrollbar-thumb-orange-400 scrollbar-track-transparent">
//           {feedbacks.map((feedback, index) => (
//             <div
//               key={index}
//               className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 flex items-center gap-6"
//             >
//               <img
//                 src={feedback.image}
//                 alt={feedback.name}
//                 className="w-24 h-24 rounded-full border-4 border-orange-500 object-cover"
//               />
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
//                   {feedback.name}
//                 </h3>
//                 <p className="text-sm text-gray-500 dark:text-gray-300">
//                   {feedback.designation}
//                 </p>
//                 <div className="flex items-center text-yellow-400 mt-1">
//                   {renderStars(feedback.rating)}
//                 </div>
//                 <p className="mt-2 text-gray-700 dark:text-gray-200">
//                   <span className="text-yellow-400 text-3xl absolute -left-4 -top-2">“</span>
//                   {feedback.review}
//                   <span className="text-yellow-400 text-3xl absolute -bottom-2">”</span>
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Right side: Form */}
//       <div className="md:w-1/2">
//         <form
//           onSubmit={handleSubmit}
//           className="bg-white dark:bg-gray-900 shadow-md rounded-2xl p-6 space-y-4"
//         >
//           <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
//             Submit Your Feedback
//           </h2>

//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             className="w-full p-2 rounded border dark:bg-gray-800 dark:text-white"
//             onChange={handleChange}
//             value={formData.name}
//             required
//           />
//           <input
//             type="text"
//             name="designation"
//             placeholder="Designation"
//             className="w-full p-2 rounded border dark:bg-gray-800 dark:text-white"
//             onChange={handleChange}
//             value={formData.designation}
//             required
//           />
//           <input
//             type="file"
//             accept="image/*"
//             className="w-full p-2 rounded border dark:bg-gray-800 dark:text-white"
//             onChange={handleImageChange}
//             required
//           />
//           <textarea
//             name="review"
//             placeholder="Write your feedback..."
//             rows="4"
//             className="w-full p-2 rounded border dark:bg-gray-800 dark:text-white"
//             onChange={handleChange}
//             value={formData.review}
//             required
//           />
//           <input
//             type="number"
//             name="rating"
//             placeholder="Rating (1-5)"
//             min="1"
//             max="5"
//             step="0.5"
//             className="w-full p-2 rounded border dark:bg-gray-800 dark:text-white"
//             onChange={handleChange}
//             value={formData.rating}
//             required
//           />
//           <button
//             type="submit"
//             className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export default function FeedbackForm() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [imagePreview, setImagePreview] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    review: "",
    rating: 5,
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "rating" ? parseFloat(value) : value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFeedback = {
      ...formData,
      image: imagePreview,
    };
    setFeedbacks((prev) => [newFeedback, ...prev]);
    setFormData({
      name: "",
      designation: "",
      review: "",
      rating: "",
      image: null,
    });
    setImagePreview(null);
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const stars = [];

    for (let i = 0; i < fullStars; i++) stars.push(<FaStar key={i} />);
    if (halfStar) stars.push(<FaStarHalfAlt key="half" />);
    while (stars.length < 5) stars.push(<FaRegStar key={`empty-${stars.length}`} />);
    return stars;
  };

  return (
    <div className="px-4 py-8 flex flex-col md:flex-row gap-8">
      {/* Left side: Feedback Cards */}
      <div className="md:w-1/2">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          What People Say
        </h2>
        <div className="max-h-[360px] overflow-y-auto space-y-6 pr-2 scrollbar-thin scrollbar-thumb-orange-400 scrollbar-track-transparent">
          {feedbacks.map((feedback, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 flex items-center gap-6"
            >
              <img
                src={feedback.image}
                alt={feedback.name}
                className="w-24 h-24 rounded-full border-4 border-orange-500 object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {feedback.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  {feedback.designation}
                </p>
                <div className="flex items-center text-yellow-400 mt-1">
                  {renderStars(feedback.rating)}
                </div>
                <p className="mt-2 text-gray-700 dark:text-gray-200 relative">
                  <span className="text-yellow-400 text-3xl absolute -left-4 -top-2">“</span>
                  {feedback.review}
                  <span className="text-yellow-400 text-3xl absolute -bottom-2">”</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right side: Form */}
      <div className="md:w-1/2">
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-900 shadow-md rounded-2xl p-6 space-y-4"
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Submit Your Feedback
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full p-2 rounded border dark:bg-gray-800 dark:text-white"
            onChange={handleChange}
            value={formData.name}
            required
          />
          <input
            type="text"
            name="designation"
            placeholder="Designation"
            className="w-full p-2 rounded border dark:bg-gray-800 dark:text-white"
            onChange={handleChange}
            value={formData.designation}
            required
          />
          <input
            type="file"
            accept="image/*"
            className="w-full p-2 rounded border dark:bg-gray-800 dark:text-white"
            onChange={handleImageChange}
            required
          />
          <textarea
            name="review"
            placeholder="Write your feedback..."
            rows="4"
            className="w-full p-2 rounded border dark:bg-gray-800 dark:text-white"
            onChange={handleChange}
            value={formData.review}
            required
          />
          <input
            type="number"
            name="rating"
            placeholder="Rating (1-5)"
            min="1"
            max="5"
            step="0.5"
            className="w-full p-2 rounded border dark:bg-gray-800 dark:text-white"
            onChange={handleChange}
            value={formData.rating}
            required
          />
          <button
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
