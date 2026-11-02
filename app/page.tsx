export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1>
            Next.js Portfolio
          </h1>
          <p>Olen 31 -vuotias opiskelija
            <a target="_blank" 
                href="https://www.jamk.fi">
            Jyväskylän ammattikorkeakoulun </a>
            IT-instituutissa ja suoritan Tietojenkäsittely ja tietoliikenne-alan insinööri-tutkintoa. Tavoitteeni on valmistua ohjelmoijaksi ja työllistyä mahdollisesti teollisuuden saralle. 
          </p> 
          <p>
            Olen kotoisin Keuruulta Keski-Suomesta ja olen aikaisemmin opiskellut Ympäristöteknologiaa Savonia-amk:ssa Kuopiossa. Opiskelujeni jälkeen asuin jonkin aikaa Viitasaarella, missä työskentelin maalarina. 
          </p>
          <p>
            Olen käyttänyt tietokonetta niin kauan kuin muistan ja koen, että ala tarjoaa mielekkäitä haasteita ja hyviä työllistymismahdollisuuksia. Harrastan pelaamista, elokuvia ja lukemista sekä liikuntaa. Olen myös erittäin kiinnostunut historiasta ja olen kunnostanut joitain vanhoja huonekaluja harrastusmielessä. 
          </p>
        </div>
      </main>
    </div>
  );
}
