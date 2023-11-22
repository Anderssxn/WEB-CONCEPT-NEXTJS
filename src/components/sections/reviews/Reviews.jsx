import Feedback from "@/components/Feedback";
const Reviews = () => {
  return (
    <section id="testimonios" className="w-full flex flex-col gap-6 ">
      <div className="text-center">
        <h2 className=" text-muted-foreground">TESTIMONIOS</h2>
        <h3 className="font-bold text-4xl">Lo que opina la gente:</h3>
      </div>
      <div className="-mx-12 overflow-hidden bg-muted">
        <Feedback />
      </div>
    </section>
  );
};

export default Reviews;
