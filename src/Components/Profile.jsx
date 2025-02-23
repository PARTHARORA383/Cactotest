
import profileImg1 from '../assets/lantern.jpg' // Using the existing image as placeholder

const Profile = () => {
  const profiles = [
    {
      name: "John Smith",
      designation: "Senior Developer",
      image: profileImg1
    },
    {
      name: "Sarah Johnson", 
      designation: "Product Manager",
      image: profileImg1
    },
    {
      name: "Michael Chen",
      designation: "UI/UX Designer",
      image: profileImg1
    },
    {
      name: "Emily Brown",
      designation: "Frontend Developer",
      image: profileImg1
    },
    {
      name: "David Wilson",
      designation: "Backend Developer", 
      image: profileImg1
    }
  ]

  return (
    <div className="hidden md:block max-h-[600px] p-4 max-w-[300px] w-[300px] mt-3">
      <div className="flex flex-col space-y-10">
        {profiles.map((profile, index) => (
          <div key={index} className="flex items-center space-x-4 bg-white p-2 rounded-lg shadow-md">
            <img 
              src={profile.image} 
              alt={profile.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="text-md font-semibold">{profile.name}</h3>
              <p className="text-gray-600 text-xs">{profile.designation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Profile
