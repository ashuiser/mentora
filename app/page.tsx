import CompanionCard from "@/components/CompanionCard"
import CompanionsList from "@/components/CompanionsList"
import CTA from "@/components/CTA"

const Page = () => {
  return (
    <main>
      <h1 className="text-3xl">Popular Companions</h1>
      <section className="home-section">
        <CompanionCard
          id="1"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          subject="Science"
          duration={45}
          color="#E5D0FF"
        />
        <CompanionCard
          id="2"
          name="Countsy the Number Wizard"
          topic="Derivatives & Integrals"
          subject="Maths"
          duration={30}
          color="#FFDA6E"
        />
        <CompanionCard
          id="1"
          name="Verba the Vocabulary Builder"
          topic="English Literature"
          subject="Language"
          duration={30}
          color="#BDE7FF"
        />
      </section>
      <section className="home-section">
        <CompanionsList />
        <CTA />
      </section>
    </main>
  )
}

export default Page