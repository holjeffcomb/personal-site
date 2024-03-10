import Image from "next/image";
import pLogo from "../images/periphery-logo.png";
import aalLogo from "../images/aal-logo.avif";
import { StaticImageData } from "next/image";
import styles from "../page.module.css";

interface Client {
  name: string;
  logoFileName: StaticImageData;
}

const clients: Client[] = [
  {
    name: "Periphery",
    logoFileName: pLogo,
    websiteUrl: "https://periphery.net",
  },
  {
    name: "Animals as Leaders",
    logoFileName: aalLogo,
    websiteUrl: "https://animalsasleaders.org",
  },
  {
    name: "Thy Art is Murder",
    logoFileName: {},
    websiteUrl: "https://www.thyartismurder.net",
  },
  {
    name: "Steel Panther",
    logoFileName: {},
    websiteUrl: "https://steelpanther.com",
  },
  {
    name: "Cannibal Corpse",
    logoFileName: {},
    websiteUrl: "",
  },
  {
    name: "Plini",
    logoFileName: {},
    websiteUrl: "",
  },
];

export default function WorkPage() {
  return (
    <>
      <h1>Work Page</h1>
      {clients.map((client: Client, index: number) => {
        return (
          <>
            <h2>{client.name}</h2>
            <div className={styles.imageContainer}>
              <Image
                src={client.logoFileName}
                fill={true}
                style={{ objectFit: "contain" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt={client.name}
                key={index}
              />
            </div>
          </>
        );
      })}
    </>
  );
}
