
import React, { useState, useMemo } from "react";
import { useRouter } from "next/router";




const exampleData = [
  {
      id: 1,
      firstname: "Ayden-anand",
      lastname: "An",
      school: "NIT",
      job: "Model",
      alive: "true",
      items: [
          { id: 10, name: "Fragrance" },
          { id: 11, name: "Pnone" }
      ],
      height: 195,
      image: "https://i.pinimg.com/736x/bd/ff/7b/bdff7b5884abb940d237d9c570187880.jpg",
      Information:"guygsyesuhdfhsbhskefsyksdh"
  },
  {
      id: 2,
      firstname: "Chinguun",
      lastname: "Toivgoo",
      school: "NIT",
      job: "Gang leader",
      alive: "true",
      items:[
          { id: 12, name: "laptop"},
          { id: 13, name: "phone"}
      ],
      height: 183,
      image:"https://instagram.fuln2-2.fna.fbcdn.net/v/t1.15752-9/483156456_636616812451810_2288452974353455718_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_ohc=6OZ-E_FLlmQQ7kNvgGnitD8&_nc_oc=Adiy-IZIxGdEXcHqAUa5ZStvd78OYhvGpJd8AVa-1JmE2ox0LhLQTUUi2AZyDiaBusA&_nc_zt=23&_nc_ht=instagram.fuln2-2.fna&oh=03_Q7cD1wHY3ZISPqL9oozIX5bu4quKe2xXPI4CJsqmbegRV08fmw&oe=67FAEF84",
      Information:"guygsyesuhdfhsbhskefsyksdh"
  },
  {
      id: 3,
      firstname: "Anduul",
      lastname: "Altankhaich",
      school: "NIT",
      job: "Full-time discord admin",
      alive: "true",
      items:[
          { id: 14, name: "paper"},
          { id: 15, name: "cp"}
      ],
      height: 192,
      image:"https://scontent.fuln1-2.fna.fbcdn.net/v/t1.15752-9/482312043_1779296655979997_1295815958185656706_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0024fc&_nc_ohc=QCxfIPNOv7IQ7kNvgHpuK0a&_nc_oc=Adgo-1ILkbZb2k25NN4jpyx7nqp6NmtrkK7PYhw6tfBqE_BxDEdXBx9PSKxrQB1wvPE&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fuln1-2.fna&oh=03_Q7cD1wECTLQDJ6HCqR3md41A-oh_BPPcHZ246wvEUjmU-s85sA&oe=67F146D4",
      Information:"guygsyesuhdfhsbhskefsyksdh"
  },
  {
      id: 4,
      firstname: "Anar",
      lastname: "Batsukh",
      school: "NIT",
      job: "Developer",
      alive: "true",
      items:[
          { id: 16, name: "camera"},
          { id: 17, name: "phone"}
      ],
      height: 182,
      image:"https://scontent.fuln1-2.fna.fbcdn.net/v/t1.15752-9/482081762_1182062486893757_813753046136776087_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=by4SLLy4HGoQ7kNvgEGRyDB&_nc_oc=AdiBl23gawhvTnJdSexw9lJncAjZ89YgloAs5Z28B_9C6o7lPhATUxo7GfeesAT7KQY&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fuln1-2.fna&oh=03_Q7cD1wHijiq8SZUte6ybgBzQ9-QlhZYD0sCCDmWZdkdmm31QwA&oe=67F14E4E",
      Information:"guygsyesuhdfhsbhskefsyksdh"
  },
  {
      id: 5,
      firstname: "Audaulet",
      lastname: "Nurbulsin",
      school: "NIT",
      job: "Pro software engineer",
      alive: "true",
      items: [
          { id: 10, name: "Math book" },
          { id: 11, name: "pen" }
      ],
      height: 170,
      image: "https://scontent.fuln1-1.fna.fbcdn.net/v/t1.15752-9/481887946_637857152333557_1176717618357575866_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_ohc=4AqFAZ_zc1wQ7kNvgG9NKCx&_nc_oc=Adgmtw4qvKCDFcr0hMmatl6pCTH3QSpUOxnq5q46ZhhFCY8F1ZDWAwV4NaSabhK1rKU&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fuln1-1.fna&oh=03_Q7cD1wH9pW20RTJgPt4KI11B9y1-QRP2_lleTeQE3AIQmVE2zw&oe=67F15395",
      Information:"guygsyesuhdfhsbhskefsyksdh"
  },
  {
      id: 6,
      firstname: "Khulan",
      lastname: "Spongebob",
      school: "NIT",
      job: "Pro roblox player",
      alive: "true",
      items:[
          { id: 12, name: "gun"},
          { id: 13, name: "knife"}
      ],
      height: 170,
      image:"https://scontent.fuln1-1.fna.fbcdn.net/v/t1.15752-9/481985129_643599998270360_6386462967577279544_n.jpg?stp=dst-jpg_p480x480_tt6&_nc_cat=111&ccb=1-7&_nc_sid=0024fc&_nc_ohc=8qALu-JrRqkQ7kNvgGIXPl7&_nc_oc=AdjHGFMwukZdp9ZLadNC-kAUIXRd87mauFU0O2pv_c2sLlxUW-1pZLxeIpvJ1W8F5-4&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fuln1-1.fna&oh=03_Q7cD1wEIDed6r3a8RlOLcz4HFbnA21mMRn-m3xE6MAvjIkkR3Q&oe=67F1685D",
      Information:"guygsyesuhdfhsbhskefsyksdh"
  },
  {
      id: 7,
      firstname: "Ysiu",
      lastname: "Erkhbayar",
      school: "NIT",
      job: "Unemployed",
      alive: "true",
      items:[
          { id: 14, name: "pen"},
          { id: 15, name: "notebook"}
      ],
      height: 190,
      image:"https://scontent.fuln1-2.fna.fbcdn.net/v/t1.15752-9/482787571_1331448308098131_8177112748134767176_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_ohc=Q4T1QxE8LdsQ7kNvgGhLvv4&_nc_oc=Adgt_l4rKb5_YJIE9a2t5Li1VxjHLBjB5veDgyWjDtKCO7ZGxfzm9dlQ9Vza2Lg_8hE&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fuln1-2.fna&oh=03_Q7cD1wH-lbBcXgEEuy8evQUV9SZrKK40e_kqYrJeTr0Kx7IjyA&oe=67F133CD",
      Information:"guygsyesuhdfhsbhskefsyksdh"
  },
  {
      id: 8,
      firstname: "Naran-erdene",
      lastname: "Hourglass",
      school: "NIT",
      job: "Model",
      alive: "true",
      items:[
          { id: 16, name: "1m dollar"},
          { id: 17, name: "phone"}
      ],
      height: 165,
      image:"https://scontent.fuln2-2.fna.fbcdn.net/v/t1.15752-9/485523915_4042185756016579_4833598187850713391_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=ttQfWpDRg9UQ7kNvgFJVd-x&_nc_oc=AdlFvl8T3LwnBoySokah8Q_4xsuQvJCHmbN611v76wpzH5Xm3UlQwTe_ICYvjELuRj0&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fuln2-2.fna&oh=03_Q7cD1wFegBm38jGXPQJtV3oKyPmoMWNxC84M44dOLtQ_39A7Dw&oe=680C7229",
  },
  {
      id: 9,
      firstname: "Batpurev",
      lastname: "Batmunkh",
      school: "NIT",
      job: "Software Engineer",
      alive: "true",
      items:[
          { id: 14, name: "diet coce"},
          { id: 15, name: "phone"}
      ],
      height: 165,
      image:"https://scontent.fuln1-1.fna.fbcdn.net/v/t1.15752-9/482306167_971089751825907_4456575847427830375_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_ohc=m8TzVSda_NgQ7kNvgEaSHhl&_nc_oc=Adjlj6fBDvtEfaEtsewFbl5jsQyl3-BtAwqQza2P2UGQXLGIBYI7Zy7JYeWW8NsvP2I&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fuln1-1.fna&oh=03_Q7cD1wHY3PWutdU3OZ0D3eDWYmQcGIscDBx48Kudlm9OY9fDjA&oe=67F13E07",
      Information:"guygsyesuhdfhsbhskefsyksdh"
  },
  {
      id: 10,
      firstname: "Soyombo",
      lastname: "Chinguunjav",
      school: "NIT",
      job: "Locker Boxer",
      alive: "true",
      items:[
          { id: 16, name: "dildo"},
          { id: 17, name: "phone"}
      ],
      height: 183,
      image:"https://instagram.fuln1-1.fna.fbcdn.net/v/t1.15752-9/482451310_647979671156189_5979796682525527731_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_ohc=SrALtyDZWDkQ7kNvgGaJ0nS&_nc_oc=AdiG1Sv-92D9lpmK4iJdEx4t4UmHFjC8jqw1UFR8JI-bqZJR9qn5n6BiN0tNVpWLu5I&_nc_zt=23&_nc_ht=instagram.fuln1-1.fna&oh=03_Q7cD1wH62yJctDV9FNaEGLCU3jOufOzGz_VxKh8wKM2jpoVd5A&oe=67F15BB1",
      Information:"guygsyesuhdfhsbhskefsyksdh"
  },
      {
          id: 11,
          firstname: "Anand",
          lastname: "Altanhuyg",
          school: "NIT",
          job: "Pizza hut",
          alive: "true",
          items: [
              { id: 20, name: "Laptop" },
              { id: 21, name: "Book" }
          ],
          height: 180,
          image: "https://scontent.fuln2-2.fna.fbcdn.net/v/t1.15752-9/485182133_9559485677431673_4938891620119709495_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_ohc=BWHEN_87ZLcQ7kNvgFEddvV&_nc_oc=AdlxBGXoSWtpW9cQV75exeNJoER55xJdmdqh_TA63wUx6R1u_Y4-WPFgoRTN2GJLkME&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fuln2-2.fna&oh=03_Q7cD1wH5yp-TREfQwO2NKq5_hadxVOVYZX89rZ899cTMpVPX_Q&oe=680C4B63",
          Information:"Some Info about John"
      },
      {
        id: 21,
        firstname: "Dul",
        lastname: "zzz",
        school: "NIT",
        job: "Barber",
        alive: "true",
        items: [
            { id: 20, name: "Laptop" },
            { id: 21, name: "Book" }
        ],
        height: 180,
        image: "https://scontent.fuln2-2.fna.fbcdn.net/v/t1.15752-9/485447651_976374994209696_1832471727969827725_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=0024fc&_nc_ohc=NPt1xqxGrg8Q7kNvgF9VRS_&_nc_oc=Adn7uCJ29Ea4d6e_SXOlfunYCKbPjYkybBKnOpZv2SL4bjCsY1OlViuEseMxtgc3i78&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fuln2-2.fna&oh=03_Q7cD1wEY9ZYeGHa-NRfGy8HnD9xsc7m_zNE0cTEgtKR2ZOncMA&oe=680C450E",
    },
      {
          id: 12,
          firstname: "Khantushig",
          lastname: "zzz",
          school: "NIT",
          job: "Developer",
          alive: "true",
          items: [
              { id: 20, name: "Laptop" },
              { id: 21, name: "Book" }
          ],
          height: 150,
          image: "https://scontent.fuln2-2.fna.fbcdn.net/v/t1.15752-9/485671209_1879246886227505_2443660747808141076_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_ohc=MLjMgz8jyCcQ7kNvgHdVdSO&_nc_oc=AdkgLV9674AdogHpvjxMO5Tcm59YgEVNK6AcGdB_E_AtY8J8HYD6xbdUIGqkhdIU0Zc&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fuln2-2.fna&oh=03_Q7cD1wEPqu69xQtF_avKSy_ZdEmJSQLV09_Zvo8MA-XDECv78w&oe=680C54B7",
          Information:"Some Info about John"
      },
      {
          id: 13,
          firstname: "Oyunbileg",
          lastname: "zzz",
          school: "NIT",
          job: "Developer",
          alive: "true",
          items: [
              { id: 20, name: "Laptop" },
              { id: 21, name: "Book" }
          ],
          height: 170,
          image: "https://randomuser.me/api/portraits/men/1.jpg",
          Information:"Some Info about John"
      },
      {
          id: 14,
          firstname: "Serjmydag",
          lastname: "zzz",
          school: "NIT",
          job: "Developer",
          alive: "true",
          items: [
              { id: 20, name: "Laptop" },
              { id: 21, name: "Book" }
          ],
          height: 161,
          image: "https://scontent.fuln2-2.fna.fbcdn.net/v/t1.15752-9/484252961_1214832206743858_3962873675150563760_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=nA8HD-pVHioQ7kNvgHNL4wG&_nc_oc=Adl6QsKrWUmqJxleaR4F99P_jf3QYptMaSsYDUGE-rVwNy0tvZG8iw8_n6r4Akissrc&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fuln2-2.fna&oh=03_Q7cD1wGWuuQzcuPJ4-FFqCucDG3kj57h7ytRl41IuW1cnlwjYw&oe=680C4E63",
          Information:"Some Info about John"
      },
      {
          id: 15,
          firstname: "Minori",
          lastname: "zzz",
          school: "NIT",
          job: "Developer",
          alive: "true",
          items: [
              { id: 20, name: "Laptop" },
              { id: 21, name: "Book" }
          ],
          height: 155,
          image: "https://randomuser.me/api/portraits/men/1.jpg",
          Information:"Some Info about John"
      },
      {
          id: 16,
          firstname: "Gunsen",
          lastname: "zzz",
          school: "NIT",
          job: "Developer",
          alive: "true",
          items: [
              { id: 20, name: "Laptop" },
              { id: 21, name: "Book" }
          ],
          height: 170,
          image: "https://randomuser.me/api/portraits/men/1.jpg",
          Information:"Some Info about John"
      },
      {
          id: 17,
          firstname: "Tsolmon",
          lastname: "zzz",
          school: "NIT",
          job: "Developer",
          alive: "true",
          items: [
              { id: 20, name: "Laptop" },
              { id: 21, name: "Book" }
          ],
          height: 170,
          image: "https://randomuser.me/api/portraits/men/1.jpg",
          Information:"Some Info about John"
      },
      {
          id: 18,
          firstname: "Telmuun",
          lastname: "zzz",
          school: "NIT",
          job: "developer",
          alive: "true",
          items: [
              { id: 20, name: "laptop" },
              { id: 21, name: "Nike" }
          ],
          height: 166,
          image: "https://static.printler.com/cache/3/3/5/c/3/c/335c3cf075408ac538ee82c4cedaffba8676fda0.jpg",
          Information:"Some Info about John"
      },
      {
          id: 19,
          firstname: "Azzaya",
          lastname: "zzz",
          school: "NIT",
          job: "Developer",
          alive: "true",
          items: [
              { id: 20, name: "Laptop" },
              { id: 21, name: "Book" }
          ],
          height: 170,
          image: "https://scontent.fuln2-2.fna.fbcdn.net/v/t1.15752-9/485671209_1325288991956410_1299864751121136627_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_ohc=y776n2btOj4Q7kNvgH7VDLf&_nc_oc=AdnmXFOiE0aVi-ucPSDB-m_GnnW6WLSwTmv52AWO7HBQbmNQxxlFF4gRxjS4fV6p8bg&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fuln2-2.fna&oh=03_Q7cD1wFLIys1ArE8HJQTnwwLtSTOCR5TPVhtQrU_8pCIjkMRuA&oe=680C74AF",
          Information:"Some Info about John"
      },
      {
          id: 20,
          firstname: "Erkhes",
          lastname: "zzz",
          school: "NIT",
          job: "Developer",
          alive: "true",
          items: [
              { id: 20, name: "Laptop" },
              { id: 21, name: "Book" }
          ],
          height: 180,
          image: "https://scontent.fuln2-2.fna.fbcdn.net/v/t1.15752-9/485420868_977881070993503_4429998680333356597_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_ohc=koavlW_JrSQQ7kNvgEM3eKj&_nc_oc=AdmJOGNZDNzZuE8kAyTaLmPqKv6y-bhTYBJdb_mwj8ZH83yrQ1H0X6bzEr0SHUl0y7s&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fuln2-2.fna&oh=03_Q7cD1wHxsRh-aMHTA3Y7Lv11IF6tQmrZBTPw_2RberdDiWuY6A&oe=680C3D14",
          Information:"Some Info about John"
      },

  ];

  

  
  export default function Lab4() {
    const [count, setCount] = useState(true);
    const [name, setName] = useState("");
    const router = useRouter();
  
    const filteredData = useMemo(
      () => exampleData.filter((item) => item.firstname.toLowerCase().includes(name.toLowerCase())),
      [name]
    );
  
    return (
      <div className="min-h-screen bg-[rgb(128,111,98)] flex flex-col items-center p-10">
              <button
        className="absolute top-6 right-6 font-bold text-xl bg-[rgb(255,235,184)] text-[rgb(28,23,17)] px-6 py-2 rounded-lg shadow-md hover:bg-[rgb(189,175,140)] transition"
        onClick={() => router.push("/")}
      >
        Home
      </button>
        <input
          type="text"
          className="border border-gray-400 bg-white text-[rgb(28,23,17)] rounded-lg p-2 shadow-md mb-5 w-60"
          placeholder="Search by name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
  
        <button
          className=" bg-[rgb(255,235,184)] text-[rgb(28,23,17)] px-4 py-2 rounded-lg shadow-md hover:bg-[rgb(189,175,140)] transition"
          onClick={() => setCount((prev) => !prev)}
        >
          Layout
        </button>
  
        {filteredData.length === 0 ? (
          <p className="text-red-500 mt-5">No person found</p>
        ) : (
          <div
            className={`${count ? "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6" : "flex flex-col gap-6"} mt-5 w-full max-w-6xl`}
          >
            {filteredData.map((element, index) => (
              <div
                key={index}
              
                className={`shadow-lg rounded-lg overflow-hidden p-5 flex transition-all duration-300 transform ${
                  count ? "flex-col items-center text-center" : "flex-row items-center text-left"
                } bg-[rgb(222,197,177)] hover:bg-[rgb(200,180,160)] hover:scale-[1.02]`}
                
              
                
              >
          
            
              
                <img
                  src={element.image}
                  className={`w-40 h-40 object-cover rounded-full shadow-md ${count ? "mb-4" : "mr-4"}`}
                  alt={element.firstname}
                />
                <div>
                  <p className="text-lg text-[rgb(28,23,17)] font-semibold">{element.firstname} {element.lastname}</p>
                  <p className="text-[rgb(28,23,17)]">Job: {element.job}</p>
                  <p className="text-[rgb(28,23,17)]">Height: {element.height}</p>
                  <div className="mt-3">
                    <p className="font-semibold text-[rgb(28,23,17)]">Items:</p>
                    <div className={`flex flex-wrap gap-2 mt-2 ${count ? "justify-center" : ""}`}>
                      {element.items.map((item, idx) => (
                        <span key={idx} className="bg-gray-200 text-[rgb(28,23,17)] px-2 py-1 text-sm rounded-md">
                          {item.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }