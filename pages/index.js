import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import React from "react";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

const listOfLegisators = [
  {
    link: "https://house.utleg.gov/rep/PETERT",
    name: "Thomas W. Peterson",
    lastName: "Peterson",
    firstName: "Thomas",
    email: "tpeterson@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/PETERM",
    name: "Michael J. Petersen",
    lastName: "Petersen",
    firstName: "Michael",
    email: "mpetersen@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/JOHNSDN",
    name: "Dan N. Johnson",
    lastName: "Johnson",
    firstName: "Dan",
    email: "dnjohnson@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/BIRKEK",
    name: "Kera Birkeland",
    lastName: "Birkeland",
    firstName: "Kera",
    email: "kbirkeland@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/SNIDEC",
    name: "Casey Snider",
    lastName: "Snider",
    firstName: "Casey",
    email: "csnider@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/GWYNNM",
    name: "Matthew H. Gwynn",
    lastName: "Gwynn",
    firstName: "Matthew",
    email: "mgwynn@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/WILCORD",
    name: "Ryan D. Wilcox",
    lastName: "Wilcox",
    firstName: "Ryan",
    email: "ryanwilcox@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/KYLEJB",
    name: "Jason B. Kyle",
    lastName: "Kyle",
    firstName: "Jason",
    email: "jkyle@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/MUSSECR",
    name: "Calvin R. Musselman",
    lastName: "Musselman",
    firstName: "Calvin",
    email: "cmusselman@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/LESSER",
    name: "Rosemary T. Lesser",
    lastName: "Lesser",
    firstName: "Rosemary",
    email: "rlesser@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/HALLK",
    name: "Katy Hall",
    lastName: "Hall",
    firstName: "Katy",
    email: "khall@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/SCHULM",
    name: "Mike Schultz",
    lastName: "Schultz",
    firstName: "Mike",
    email: "mikeschultz@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/PETERK",
    name: "Karen M. Peterson",
    lastName: "Peterson",
    firstName: "Karen",
    email: "kpeterson@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/LISONK",
    name: "Karianne Lisonbee",
    lastName: "Lisonbee",
    firstName: "Karianne",
    email: "karilisonbee@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/WILSOBR",
    name: "Brad R. Wilson",
    lastName: "Wilson",
    firstName: "Brad",
    email: "bradwilson@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/LEETA",
    name: "Trevor Lee",
    lastName: "Lee",
    firstName: "Trevor",
    email: "tlee@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/BARLOSE",
    name: "Stewart E. Barlow",
    lastName: "Barlow",
    firstName: "Stewart",
    email: "sbarlow@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/CUTLEP",
    name: "Paul A. Cutler",
    lastName: "Cutler",
    firstName: "Paul",
    email: "pcutler@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/WARDR",
    name: "Raymond P. Ward",
    lastName: "Ward",
    firstName: "Raymond",
    email: "rayward@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/BALLAMG",
    name: "Melissa G. Ballard",
    lastName: "Ballard",
    firstName: "Melissa",
    email: "mballard@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/HOLLIS",
    name: "Sandra Hollins",
    lastName: "Hollins",
    firstName: "Sandra",
    email: "shollins@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/DAILEJ",
    name: "Jennifer Dailey-Provost",
    lastName: "Dailey-Provost",
    firstName: "Jennifer",
    email: "jdprovost@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/KINGBS",
    name: "Brian S. King",
    lastName: "King",
    firstName: "Brian",
    email: "briansking@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/BRISCJK",
    name: "Joel K. Briscoe",
    lastName: "Briscoe",
    firstName: "Joel",
    email: "jbriscoe@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/ROMERAY",
    name: "Angela Romero",
    lastName: "Romero",
    firstName: "Angela",
    email: "angelaromero@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/KOTTEQ",
    name: "Quinn Kotter",
    lastName: "Kotter",
    firstName: "Quinn",
    email: "qkotter@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/LOUBEA",
    name: "Anthony E. Loubet",
    lastName: "Loubet",
    firstName: "Anthony",
    email: "aloubet@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/JIMENT",
    name: "Tim Jimenez",
    lastName: "Jimenez",
    firstName: "Tim",
    email: "tjimenez@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/BOLINB",
    name: "Bridger Bolinder",
    lastName: "Bolinder",
    firstName: "Bridger",
    email: "bbolinder@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/ROHNEJ",
    name: "Judy Weeks Rohner",
    lastName: "Rohner",
    firstName: "Judy",
    email: "jrohner@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/HAYESS",
    name: "Sahara Hayes",
    lastName: "Hayes",
    firstName: "Sahara",
    email: "shayes@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/OWENSDO",
    name: "Doug Owens",
    lastName: "Owens",
    firstName: "Doug",
    email: "dougowens@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/MOSSCS",
    name: "Carol Spackman Moss",
    lastName: "Moss",
    firstName: "Carol",
    email: "csmoss@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/WHEATMA",
    name: "Mark A. Wheatley",
    lastName: "Wheatley",
    firstName: "Mark",
    email: "markwheatley@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/DUNNIJA",
    name: "James A. Dunnigan",
    lastName: "Dunnigan",
    firstName: "James",
    email: "jdunnigan@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/MATTHA",
    name: "Ashlee Matthews",
    lastName: "Matthews",
    firstName: "Ashlee",
    email: "amatthews@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/ACTONCK",
    name: "Cheryl K. Acton",
    lastName: "Acton",
    firstName: "Cheryl",
    email: "cacton@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/IVORYK",
    name: "Ken Ivory",
    lastName: "Ivory",
    firstName: "Ken",
    email: "kivory@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/STODDA",
    name: "Andrew Stoddard",
    lastName: "Stoddard",
    firstName: "Andrew",
    email: "astoddard@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/BENNIGL",
    name: "Gay Lynn Bennion",
    lastName: "Bennion",
    firstName: "Gay",
    email: "glbennion@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/SPENDRM",
    name: "Robert M. Spendlove",
    lastName: "Spendlove",
    firstName: "Robert",
    email: "rspendlove@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/ELIASS",
    name: "Steve Eliason",
    lastName: "Eliason",
    firstName: "Steve",
    email: "seliason@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/TEUSCJ",
    name: "Jordan D. Teuscher",
    lastName: "Teuscher",
    firstName: "Jordan",
    email: "jteuscher@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/PULSIS",
    name: "Susan Pulsipher",
    lastName: "Pulsipher",
    firstName: "Susan",
    email: "susanpulsipher@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/STENQJ",
    name: "Jeffrey D. Stenquist",
    lastName: "Stenquist",
    firstName: "Jeffrey",
    email: "jstenquist@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/STRONMA",
    name: "Mark A. Strong",
    lastName: "Strong",
    firstName: "Mark",
    email: "mstrong@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/COBBJ",
    name: "James F. Cobb",
    lastName: "Cobb",
    firstName: "James",
    email: "jcobb@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/PIERUC",
    name: "Candice B. Pierucci",
    lastName: "Pierucci",
    firstName: "Candice",
    email: "cpierucci@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/GRICIS",
    name: "Stephanie Gricius",
    lastName: "Gricius",
    firstName: "Stephanie",
    email: "sgricius@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/MOSSJ",
    name: "Jefferson Moss",
    lastName: "Moss",
    firstName: "Jefferson",
    email: "jeffersonmoss@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/MALOYC",
    name: "A. Cory Maloy",
    lastName: "Maloy",
    firstName: "A.",
    email: "corymaloy@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/CHRISKJ",
    name: "Kay J. Christofferson",
    lastName: "Christofferson",
    firstName: "Kay",
    email: "kchristofferson@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/BRAMMB",
    name: "Brady Brammer",
    lastName: "Brammer",
    firstName: "Brady",
    email: "bbrammer@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/HAWKIJ",
    name: "Jon Hawkins",
    lastName: "Hawkins",
    firstName: "Jon",
    email: "jhawkins@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/PETERVL",
    name: "Val L. Peterson",
    lastName: "Peterson",
    firstName: "Val",
    email: "vpeterson@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/ABBOTN",
    name: "Nelson T. Abbott",
    lastName: "Abbott",
    firstName: "Nelson",
    email: "nabbott@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/STRATKJ",
    name: "Keven J. Stratton",
    lastName: "Stratton",
    firstName: "Keven",
    email: "kstratton@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/KOHLEM",
    name: "Mike L. Kohler",
    lastName: "Kohler",
    firstName: "Mike",
    email: "mkohler@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/CLANCT",
    name: "Tyler Clancy",
    lastName: "Clancy",
    firstName: "Tyler",
    email: "tclancy@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/JUDKIM",
    name: "Marsha Judkins",
    lastName: "Judkins",
    firstName: "Marsha",
    email: "mjudkins@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/THURSNK",
    name: "Norman K Thurston",
    lastName: "Thurston",
    firstName: "Norman",
    email: "normthurston@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/WHYTESL",
    name: "Stephen L. Whyte",
    lastName: "Whyte",
    firstName: "Stephen",
    email: "swhyte@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/BURTOJS",
    name: "Jefferson S. Burton",
    lastName: "Burton",
    firstName: "Jefferson",
    email: "jburton@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/WELTOD",
    name: "Douglas R. Welton",
    lastName: "Welton",
    firstName: "Douglas",
    email: "dwelton@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/LUNDSJ",
    name: "Steven J. Lund",
    lastName: "Lund",
    firstName: "Steven",
    email: "slund@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/WATKICF",
    name: "Christine F. Watkins",
    lastName: "Watkins",
    firstName: "Christine",
    email: "christinewatkins@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/CHEWSH",
    name: "Scott H. Chew",
    lastName: "Chew",
    firstName: "Scott",
    email: "scottchew@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/LYMANP",
    name: "Phil Lyman",
    lastName: "Lyman",
    firstName: "Phil",
    email: "plyman@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/ALBRECR",
    name: "Carl R. Albrecht",
    lastName: "Albrecht",
    firstName: "Carl",
    email: "carlalbrecht@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/SHIPPRP",
    name: "Rex P. Shipp",
    lastName: "Shipp",
    firstName: "Rex",
    email: "rshipp@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/ELISOJ",
    name: "Joseph Elison",
    lastName: "Elison",
    firstName: "Joseph",
    email: "jelison@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/JACKC",
    name: "Colin Jack",
    lastName: "Jack",
    firstName: "Colin",
    email: "cjack@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/WALTER",
    name: "R. Neil Walter",
    lastName: "Walter",
    firstName: "R.",
    email: "nwalter@le.utah.gov",
  },
  {
    link: "https://house.utleg.gov/rep/BROOKW",
    name: "Walt Brooks",
    lastName: "Brooks",
    firstName: "Walt",
    email: "wbrooks@le.utah.gov",
  },
];

export default function Home() {
  const [subject, setSubject] = React.useState("Please vote no on Bill 114");
  const [body, setBody] = React.useState("Dear Representative $LAST_NAME$,\n");
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Save Animals</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        style={{
          backgroundColor: "#FEFEFE",
          height: "100%",
          width: "100%",
          color: "black",
          display: "flex",
          justifyContent: "center",
          fontFamily: "arial",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 1500,
            textAlign: "center",
            fontSize: 30,

            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 50,
          }}
          className="flex justify-center flex-col md:justify-start"
        >
          <div
            style={{
              width: "100%",
              textAlign: "center",
              fontSize: 30,
              paddingTop: 50,
            }}
          >
            Don't let abuse of animals be silenced.
          </div>
          <div
            style={{
              width: "100%",
              textAlign: "left",
              fontSize: 20,
              paddingTop: 50,
            }}
          >
            <div style={{ marginBottom: 20 }}>
              Please write the Utah house representatives expressing concern
              over Bill 114 taking rights away from the people of Utah by
              disallowing mentioning animals being abused as a defense for
              rescuing them.
            </div>
            <div style={{ marginBottom: 20 }}>
              Rescuing an animal and putting your fate in what the community
              deems acceptable is an action that any compassionate person should
              be able to act on.
            </div>
            <div style={{ marginBottom: 20 }}>
              Even if you disagree with excess suffering to non-human animals
              being immoral, the law seeks to limit what the jury can hear in
              such a case, limiting the power of the people to have a fair trial
              by giving all the relevant information to their peers.
            </div>
            <div
              style={{
                fontSize: 14,
                display: "flex",
                flexDirection: "column",
                marginBottom: 10,
              }}
            >
              <a href="https://www.fox13now.com/news/local-news/bill-would-remove-defense-in-animal-welfare-cases">
                News article on this bill:
                https://www.fox13now.com/news/local-news/bill-would-remove-defense-in-animal-welfare-cases
              </a>
              <a href="https://le.utah.gov/~2023/bills/static/HB0114.html">
                Bill 114: https://le.utah.gov/~2023/bills/static/HB0114.html
              </a>
              <a href="https://le.utah.gov/GIS/findDistrict.jsp">
                In Utah? Find your representative here:
                https://le.utah.gov/GIS/findDistrict.jsp
              </a>
            </div>
          </div>
          <div style={{ display: "flex" }} className="flex-col md:flex-row">
            <div
              class={{
                flexDirection: "row",
                fontSize: 20,
                textAlign: "left",
                flex: 1,
              }}
              className="justify-start items-start flex md:hidden"
            >
              <div style={{ fontSize: 20, textAlign: "left" }}>
                Subject Line:
              </div>
              <input
                className="text-sm border-2 border-blue-600 w-full md:w-96"
                style={{
                  backgroundColor: "white",
                  height: 25,
                  color: "black",
                  padding: 2,
                }}
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
                placeholder={""}
              />
              <div style={{ fontSize: 20, textAlign: "left", marginTop: 10 }}>
                Body:
              </div>
              <div
                style={{
                  fontSize: 15,
                  textAlign: "left",
                  marginTop: 3,
                  marginBottom: 3,
                }}
              >
                * the $LAST_NAME$ will be automatically changed to the
                representative's last name.
              </div>
              <textarea
                className="text-sm border-2 border-blue-600"
                style={{
                  backgroundColor: "white",
                  width: "100%",
                  height: 500,
                  color: "black",
                  padding: 2,
                }}
                value={body}
                onChange={(e) => {
                  setBody(e.target.value);
                }}
                placeholder={""}
              />
            </div>
            <div>
              {listOfLegisators.map((obj) => (
                <Person
                  {...obj}
                  sendMail={() => {
                    const newBody = body.replace("$LAST_NAME$", obj.lastName);
                    router.push(
                      `mailto:${obj.email}?subject=${encodeURIComponent(
                        subject
                      )}&body=${encodeURIComponent(newBody)}`
                    );
                  }}
                />
              ))}
            </div>
            <div
              class={{
                flexDirection: "row",
                fontSize: 20,
                textAlign: "left",
                flex: 1,
              }}
              className="justify-start items-start hidden md:flex"
            >
              <div style={{ fontSize: 20, textAlign: "left" }}>
                Subject Line:
              </div>
              <input
                className="text-sm border-2 border-blue-600 w-full md:w-96"
                style={{
                  backgroundColor: "white",
                  height: 25,
                  color: "black",
                  padding: 2,
                }}
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
                placeholder={""}
              />
              <div style={{ fontSize: 20, textAlign: "left", marginTop: 10 }}>
                Body:
              </div>
              <div
                style={{
                  fontSize: 15,
                  textAlign: "left",
                  marginTop: 3,
                  marginBottom: 3,
                }}
              >
                * the $LAST_NAME$ will be automatically changed to the
                representative's last name.
              </div>
              <textarea
                className="text-sm border-2 border-blue-600"
                style={{
                  backgroundColor: "white",
                  width: "100%",
                  height: 500,
                  color: "black",
                  padding: 2,
                }}
                value={body}
                onChange={(e) => {
                  setBody(e.target.value);
                }}
                placeholder={""}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

function Person(props) {
  const [hasBeenClicked, setHasBeenClicked] = React.useState(false);
  return (
    <div
      style={{
        color: "#000000",
        padding: 10,
        flexDirection: "row",
        display: "flex",
        fontSize: 16,
        textAlign: "left",
      }}
      className="w-full justify-center"
    >
      <a href={props.link} style={{ width: 170 }}>
        {props.name}
      </a>
      <div style={{ paddingLeft: 10, width: 220 }}>{props.email}</div>
      <div
        style={{
          padding: 10,
          backgroundColor: "#0000D5",
          color: "white",
          borderRadius: 5,
          cursor: "pointer",
        }}
        onClick={() => {
          setHasBeenClicked(true);
          props.sendMail({ email: props.email });
        }}
      >
        SEND EMAIL
      </div>
      {hasBeenClicked && (
        <div style={{ fontSize: 25, color: "#00A000", marginLeft: 10 }}>✓</div>
      )}
    </div>
  );
}
