const USERS = [
    {
      "id": 1,
      "name": "Aarav Sharma",
      "city": "Mumbai",
      "age": 25,
      "avatar": "https://i.pravatar.cc/150?img=1"
    },
    {
      "id": 2,
      "name": "Sanya Reddy",
      "city": "Delhi",
      "age": 30,
      "avatar": "https://i.pravatar.cc/150?img=2"
    },
    {
      "id": 3,
      "name": "Rohan Verma",
      "city": "Bangalore",
      "age": 28,
      "avatar": "https://i.pravatar.cc/150?img=3"
    },
    {
      "id": 4,
      "name": "Ananya Gupta",
      "city": "Kolkata",
      "age": 35,
      "avatar": "https://i.pravatar.cc/150?img=4"
    },
    {
      "id": 5,
      "name": "Karan Desai",
      "city": "Chennai",
      "age": 29,
      "avatar": "https://i.pravatar.cc/150?img=5"
    },
    {
      "id": 6,
      "name": "Priya Yadav",
      "city": "Hyderabad",
      "age": 31,
      "avatar": "https://i.pravatar.cc/150?img=6"
    },
    {
      "id": 7,
      "name": "Rahul Patel",
      "city": "Pune",
      "age": 32,
      "avatar": "https://i.pravatar.cc/150?img=7"
    },
    {
      "id": 8,
      "name": "Richa Jain",
      "city": "Ahmedabad",
      "age": 27,
      "avatar": "https://i.pravatar.cc/150?img=8"
    },
    {
      "id": 9,
      "name": "Nikhil Mehta",
      "city": "Surat",
      "age": 33,
      "avatar": "https://i.pravatar.cc/150?img=9"
    },
    {
      "id": 10,
      "name": "Ayesha Khan",
      "city": "Jaipur",
      "age": 26,
      "avatar": "https://i.pravatar.cc/150?img=10"
    },
    {
      "id": 11,
      "name": "Vikram Soni",
      "city": "Gurgaon",
      "age": 35,
      "avatar": "https://i.pravatar.cc/150?img=11"
    },
    {
      "id": 12,
      "name": "Nikita Sharma",
      "city": "Noida",
      "age": 29,
      "avatar": "https://i.pravatar.cc/150?img=12"
    },
    {
      "id": 13,
      "name": "Mohan Rathi",
      "city": "Indore",
      "age": 34,
      "avatar": "https://i.pravatar.cc/150?img=13"
    },
    {
      "id": 14,
      "name": "Tanya Bhardwaj",
      "city": "Lucknow",
      "age": 28,
      "avatar": "https://i.pravatar.cc/150?img=14"
    },
    {
      "id": 15,
      "name": "Harshit Singh",
      "city": "Chandigarh",
      "age": 32,
      "avatar": "https://i.pravatar.cc/150?img=15"
    },
    {
      "id": 16,
      "name": "Shreya Tiwari",
      "city": "Bhopal",
      "age": 31,
      "avatar": "https://i.pravatar.cc/150?img=16"
    },
    {
      "id": 17,
      "name": "Anshika Verma",
      "city": "Kochi",
      "age": 25,
      "avatar": "https://i.pravatar.cc/150?img=17"
    },
    {
      "id": 18,
      "name": "Raghav Joshi",
      "city": "Patna",
      "age": 30,
      "avatar": "https://i.pravatar.cc/150?img=18"
    },
    {
      "id": 19,
      "name": "Simran Rani",
      "city": "Nagpur",
      "age": 28,
      "avatar": "https://i.pravatar.cc/150?img=19"
    },
    {
      "id": 20,
      "name": "Deepak Kumar",
      "city": "Vadodara",
      "age": 33,
      "avatar": "https://i.pravatar.cc/150?img=20"
    },
    {
      "id": 21,
      "name": "Sanya Bansal",
      "city": "Chandigarh",
      "age": 27,
      "avatar": "https://i.pravatar.cc/150?img=21"
    },
    {
      "id": 22,
      "name": "Rohit Gupta",
      "city": "Delhi",
      "age": 35,
      "avatar": "https://i.pravatar.cc/150?img=22"
    },
    {
      "id": 23,
      "name": "Vishal Chauhan",
      "city": "Bangalore",
      "age": 32,
      "avatar": "https://i.pravatar.cc/150?img=23"
    },
    {
      "id": 24,
      "name": "Isha Desai",
      "city": "Pune",
      "age": 29,
      "avatar": "https://i.pravatar.cc/150?img=24"
    },
    {
      "id": 25,
      "name": "Shubham Yadav",
      "city": "Kolkata",
      "age": 34,
      "avatar": "https://i.pravatar.cc/150?img=25"
    },
    {
      "id": 26,
      "name": "Ritika Sharma",
      "city": "Hyderabad",
      "age": 31,
      "avatar": "https://i.pravatar.cc/150?img=26"
    },
    {
      "id": 27,
      "name": "Akash Mehta",
      "city": "Surat",
      "age": 29,
      "avatar": "https://i.pravatar.cc/150?img=27"
    },
    {
      "id": 28,
      "name": "Nisha Verma",
      "city": "Mumbai",
      "age": 32,
      "avatar": "https://i.pravatar.cc/150?img=28"
    },
    {
      "id": 29,
      "name": "Aditya Rathi",
      "city": "Chennai",
      "age": 34,
      "avatar": "https://i.pravatar.cc/150?img=29"
    },
    {
      "id": 30,
      "name": "Kriti Pandey",
      "city": "Lucknow",
      "age": 26,
      "avatar": "https://i.pravatar.cc/150?img=30"
    },
    {
      "id": 31,
      "name": "Ajay Joshi",
      "city": "Nagpur",
      "age": 29,
      "avatar": "https://i.pravatar.cc/150?img=31"
    },
    {
      "id": 32,
      "name": "Prateek Kumar",
      "city": "Gurgaon",
      "age": 28,
      "avatar": "https://i.pravatar.cc/150?img=32"
    },
    {
      "id": 33,
      "name": "Aarti Gupta",
      "city": "Delhi",
      "age": 32,
      "avatar": "https://i.pravatar.cc/150?img=33"
    },
    {
      "id": 34,
      "name": "Manoj Tiwari",
      "city": "Bangalore",
      "age": 35,
      "avatar": "https://i.pravatar.cc/150?img=34"
    },
    {
      "id": 35,
      "name": "Sneha Bansal",
      "city": "Chandigarh",
      "age": 30,
      "avatar": "https://i.pravatar.cc/150?img=35"
    },
    {
      "id": 36,
      "name": "Amit Yadav",
      "city": "Mumbai",
      "age": 33,
      "avatar": "https://i.pravatar.cc/150?img=36"
    },
    {
      "id": 37,
      "name": "Neha Reddy",
      "city": "Hyderabad",
      "age": 29,
      "avatar": "https://i.pravatar.cc/150?img=37"
    },
  ];

  export { USERS };