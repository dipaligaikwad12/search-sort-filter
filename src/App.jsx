import { USERS } from "./configs"
import {
  MapPin as MapPinIcon,
  Cake as CakeIcon,
} from "lucide-react"
import { useEffect, useState } from "react";
import React from 'react'

function App() {
  const [searchText, setSearchText] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(USERS);
  const [filterAge, setFilterAge] = useState("");
  const [filterCity, setFilterCity] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    if (!searchText) {
      setFilteredUsers(USERS);
      return;
    }

    const tempFilteredUsers = USERS.filter((user) => {
      if (user.name.toLowerCase().includes(searchText)) {
        return true;
      }
      else if (user.city.toLowerCase().includes(searchText)) {
        return true;
      }
      else if (user.age.toString().includes(searchText)) {
        return true;
      } else {
        return false;
      }
    });
    setFilteredUsers(tempFilteredUsers);
  }, [searchText]);

  useEffect(()=>{
    if(!filterCity && !filterAge){
      setFilteredUsers(USERS);
      return;
    }
    const tempFilteredUsers = USERS.filter((user)=>{
      if(filterCity &&
         user.city === filterCity && 
         filterAge && user.age === parseInt(filterAge)){
        return true;
      }
      if(filterAge && !filterCity && user.age === parseInt(filterAge)){
        return true;
      }
      if(filterCity && !filterAge && user.city === filterAge){
        return true;
      }
      return false;
    })
    setFilteredUsers(tempFilteredUsers);
  },[filterCity ,filterAge]);

  useEffect(()=>{
    const tempSortedUsers = filteredUsers.sort((a,b)=>{
      if(sortOrder === 'asc'){
        return a.name.localeCompare(b.name)
      } 
      else{
        return b.name.localeCompare(a.name)
      }
    })
    setFilteredUsers([...tempSortedUsers]);
  },[sortOrder,filteredUsers]);

  return (
    <div className='font-sans'>
      <h1 className='text-center text-blue-900 text-4xl font-bold'>
        Search, Sort, Filter
      </h1>

      <input
        type="text"
        placeholder="Search"
        className="block mx-auto w-[600px] py-1 text-2xl px-4 my-6 rounded-2xl focus:outline-none border-1"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value.toLowerCase())}
      />
      {searchText ? (
        <p> {filteredUsers.length===0
        ?"No user Found.." : `Found ${filteredUsers.length} users `}</p>
      ):null}
     
     <div className="flex justify-evenly text-[20px] text-blue-800">
      <div className="bg-amber-50">
        <span>Filter by Age:</span>
        <select 
        className=""
        value={filterAge}
        onChange={(e)=> setFilterAge(e.target.value)}
        >
        <option >All</option>
        {
          USERS.map((user)=>{
            return <option key={user.age} value={user.age}>{user.age}</option>
          })
        }
        </select>
      </div>

      <div className="bg-amber-50">
        <span>Filter by City:</span>
        <select 
        className=""
        value={filterCity}
        onChange={(e)=> setFilterCity(e.target.value)}
        >
        <option >All</option>
        {
          USERS.map((user)=>{
            return <option key={user.city} value={user.city}>{user.city}</option>
          })
        }
        </select>
      </div>

      <div className="bg-amber-50">
        <span>Sort by Name:</span>
        <select 
        className=""
        value={sortOrder}
        onChange={(e)=> setSortOrder(e.target.value)}
        >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
        </select>
      </div>
      </div>

      <div className="flex flex-wrap justify-around">
        {filteredUsers.map((userData, index) => {
          const { name, city, age, avatar } = userData;

          return (
            <div className="bg-blue-100 m-5 px-5 py-3 rounded-2xl hover:bg-blue-200 w-[400px] flex shadow-lg" key={index}>
              <img src={avatar} className="h-20 rounded-full" />
              <div>
                <h1 className="ml-3 text-lg text-blue-900  font-bold font-serif">{name}</h1>
                <div className="flex items-center">
                  <p className="mx-3 w-[100px] text-blue-900 flex "><CakeIcon className="inline mx-2" />{age}</p>
                  <p className=" font-serif text-[18px] text-blue-900"><MapPinIcon className="inline" />{city}</p>
                </div>
              </div>
            </div>
          )
        })}</div>
    </div>
  )
}

export default App