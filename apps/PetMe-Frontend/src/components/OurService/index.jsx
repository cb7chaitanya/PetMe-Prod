/* eslint-disable react/no-unescaped-entities */
import React from "react"
import ourServiceCover from "../../assets/images/service.png"
import Card from "./Card.jsx"

export default function OurService() {
  return (
    <section className="w-full h-full p-6 mb-6 bg-pink-100">
      {/* Title */}
      <div className="text-5xl font-extrabold text-center text-gray-800 my-10 py-3">
        What We Offer:
      </div>

      {/* First Row of Cards */}
      <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-1 place-items-center mb-10">
        <Card
          title="Adoption Counseling"
          content="Our experienced team understands that adopting a pet is a significant decision. We offer personalized counseling sessions to help you find the perfect match for your lifestyle, preferences, and needs."
        />
        <Card
          title="Matchmaking"
          content="We believe that the key to a successful adoption is finding the right match. Through careful matchmaking, we consider factors such as temperament, activity level, and compatibility with other pets and family members."
        />
        <Card
          title="Health and Wellness"
          content="The well-being of our animals is our top priority. Before they are available for adoption, all pets receive thorough veterinary examinations, vaccinations, and any necessary medical treatments."
        />
      </div>

      {/* Image */}
      <div className="flex justify-center mb-10">
        <div className="w-full max-w-screen-lg overflow-hidden ">
          <img
            src={ourServiceCover}
            className="w-full h-auto object-cover"
            alt="Dog Image"
          />
        </div>
      </div>

      {/* Second Row of Cards */}
      <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-1 place-items-center">
        <Card
          title="Behavioral Support"
          content="Adjusting to a new home can be challenging for pets, which is why we offer ongoing behavioral support to adopters."
        />
        <Card
          title="Post-Adoption Follow-Up"
          content="Our commitment to our animals doesn't end when they leave our facility. We conduct post-adoption follow-up checks to ensure that both pets and adopters are thriving in their new environment."
        />
        <Card
          title="Community Events and Resources"
          content="Join our vibrant community of pet lovers and enthusiasts! We host regular events, workshops, and educational seminars on topics ranging from pet care basics to advanced training techniques."
        />
      </div>
    </section>
  )
}
