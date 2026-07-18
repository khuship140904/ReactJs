import { useState } from 'react';
import './App.css'

function App(){
   //let[i,setI] = useState(0);
   const [showIndex, setShowIndex] = useState(null);

  const arr = [
  {
    "name": "Sarah Jenkins",
    "age": 21,
    "phone": "+1-555-0142",
    "city": "Seattle",
    "qualification": [
      {
        "school/college name": "Westside Middle School",
        "rank": 4,
        "score": "95%"
      },
      {
        "school/college name": "Lakeside High School",
        "rank": 10,
        "score": "3.8 GPA"
      },
      {
        "school/college name": "University of Washington",
        "rank": 2,
        "score": "3.95 GPA"
      }
    ]
  },
  {
    "name": "Rohan Mehta",
    "age": 23,
    "phone": "+91-98234-56789",
    "city": "Delhi",
    "qualification": [
      {
        "school/college name": "Delhi Public School",
        "rank": 15,
        "score": "92%"
      },
      {
        "school/college name": "Hansraj College",
        "rank": 8,
        "score": "8.9 CGPA"
      },
      {
        "school/college name": "Delhi School of Economics",
        "rank": 3,
        "score": "9.2 CGPA"
      }
    ]
  },
  {
    "name": "Chloe Dupont",
    "age": 22,
    "phone": "+33-1-4227-7890",
    "city": "Lyon",
    "qualification": [
      {
        "school/college name": "Collège Bellecour",
        "rank": 1,
        "score": "19/20"
      },
      {
        "school/college name": "Lycée Ampère",
        "rank": 5,
        "score": "17.5/20"
      },
      {
        "school/college name": "University of Lyon",
        "rank": 12,
        "score": "16/20"
      }
    ]
  },
  {
    "name": "Sarah Jenkins",
    "age": 21,
    "phone": "+1-555-0142",
    "city": "Seattle",
    "qualification": [
      {
        "school/college name": "Westside Middle School",
        "rank": 4,
        "score": "95%"
      },
      {
        "school/college name": "Lakeside High School",
        "rank": 10,
        "score": "3.8 GPA"
      },
      {
        "school/college name": "University of Washington",
        "rank": 2,
        "score": "3.95 GPA"
      }
    ]
  },
  {
    "name": "Rohan Mehta",
    "age": 23,
    "phone": "+91-98234-56789",
    "city": "Delhi",
    "qualification": [
      {
        "school/college name": "Delhi Public School",
        "rank": 15,
        "score": "92%"
      },
      {
        "school/college name": "Hansraj College",
        "rank": 8,
        "score": "8.9 CGPA"
      },
      {
        "school/college name": "Delhi School of Economics",
        "rank": 3,
        "score": "9.2 CGPA"
      }
    ]
  },
  {
    "name": "Chloe Dupont",
    "age": 22,
    "phone": "+33-1-4227-7890",
    "city": "Lyon",
    "qualification": [
      {
        "school/college name": "Collège Bellecour",
        "rank": 1,
        "score": "19/20"
      },
      {
        "school/college name": "Lycée Ampère",
        "rank": 5,
        "score": "17.5/20"
      },
      {
        "school/college name": "University of Lyon",
        "rank": 12,
        "score": "16/20"
      }
    ]
  },
  {
    "name": "Elena Rostova",
    "age": 25,
    "phone": "+49-30-123456",
    "city": "Berlin",
    "qualification": [
      {
        "school/college name": "Goethe Gymnasium",
        "rank": 2,
        "score": "1.1 Abitur"
      },
      {
        "school/college name": "Humboldt University",
        "rank": 7,
        "score": "1.3 ECTS"
      },
      {
        "school/college name": "Technical University of Berlin",
        "rank": 4,
        "score": "1.2 ECTS"
      }
    ]
  },
  {
    "name": "Marcus Vance",
    "age": 24,
    "phone": "+1-415-555-2671",
    "city": "San Francisco",
    "qualification": [
      {
        "school/college name": "Lowell High School",
        "rank": 20,
        "score": "3.75 GPA"
      },
      {
        "school/college name": "UC Berkeley",
        "rank": 11,
        "score": "3.82 GPA"
      },
      {
        "school/college name": "Stanford University",
        "rank": 5,
        "score": "3.91 GPA"
      }
    ]
  },
  {
    "name": "Yuki Tanaka",
    "age": 22,
    "phone": "+81-3-5555-0199",
    "city": "Tokyo",
    "qualification": [
      {
        "school/college name": "Kaisei Academy",
        "rank": 6,
        "score": "4.8/5.0"
      },
      {
        "school/college name": "University of Tokyo",
        "rank": 14,
        "score": "A"
      },
      {
        "school/college name": "Waseda University",
        "rank": 2,
        "score": "A+"
      }
    ]
  },
  {
    "name": "David Nwosu",
    "age": 23,
    "phone": "+234-1-555-8821",
    "city": "Lagos",
    "qualification": [
      {
        "school/college name": "Atlantic Hall School",
        "rank": 3,
        "score": "7 distinctions"
      },
      {
        "school/college name": "University of Ibadan",
        "rank": 9,
        "score": "4.65/5.0 CGPA"
      },
      {
        "school/college name": "University of Lagos",
        "rank": 1,
        "score": "4.91/5.0 CGPA"
      }
    ]
  },
  {
    "name": "Sofia Gomez",
    "age": 21,
    "phone": "+52-55-5555-4321",
    "city": "Mexico City",
    "qualification": [
      {
        "school/college name": "Colegio Alemán",
        "rank": 8,
        "score": "9.2/10"
      },
      {
        "school/college name": "Prepa Tec",
        "rank": 12,
        "score": "94/100"
      },
      {
        "school/college name": "UNAM",
        "rank": 3,
        "score": "9.6/10"
      }
    ]
  }
];
return (
  <div className="container">

      {arr.map((student, index) => (
        <div id="oneRecord" key={index}>

          <h2>{student.name}</h2>
          <h3>Age : {student.age}</h3>
          <h3>Phone : {student.phone}</h3>
          <h3>City : {student.city}</h3>

          <button
            onClick={() =>
              setShowIndex(showIndex === index ? null : index)
            }
          >
            {showIndex === index
              ? "Hide Qualification"
              : "Show Qualification"}
          </button>

          {showIndex === index && (
            <div className="qualification">

              <h3>Qualifications</h3>

              {student.qualification.map((q, i) => (
                <div key={i}>
                  <p>
                    <b>School/College :</b>{" "}
                    {q["school/college name"]}
                  </p>

                  <p>
                    <b>Rank :</b> {q.rank}
                  </p>

                  <p>
                    <b>Score :</b> {q.score}
                  </p>

                  <hr />
                </div>
              ))}

            </div>
          )}

        </div>
      ))}

    </div>
  );
}


export default App;

