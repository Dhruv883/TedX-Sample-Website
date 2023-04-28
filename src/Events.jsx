import React from "react";

const Events = () => {
  return (
    <div className="px-5 py-10 flex flex-col gap-y-12">
      <div className="flex flex-col-reverse md:flex-row justify-between border-l-4 border-l-red pl-6">
        <div className="flex flex-col lg:justify-evenly gap-5 md:w-[50vw] lg:w-[50vw] lg:max-h-[350px] overflow-hidden">
          <div className="text-red text-2xl lg:text-4xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            quos.
          </div>
          <div className="text-sm lg:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sunt,
            rem quia officia iure enim sit, maxime aliquid velit, eligendi
            commodi. Dignissimos iure quae id ad ullam. Accusamus quae dicta hic
            commodi id, nam nisi enim? Consequuntur ratione, unde repellendus
            doloribus beatae esse ducimus nihil dolor blanditiis quod
            praesentium qui aliquid voluptates similique voluptas eius dolores
            quia quae. Ullam sequi saepe sint quibusdam vel neque vitae autem,
            hic ad adipisci voluptatum accusamus optio consequuntur in!
          </div>
        </div>
        <div>
          <img
            src="../images/event1.jpg"
            alt=""
            className="md:w-[40vw]  md:h-full"
          />
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-between border-l-4 border-l-red pl-6">
        <div className="flex flex-col lg:justify-evenly gap-5 md:w-[50vw] lg:w-[50vw] lg:max-h-[350px] overflow-hidden">
          <div className="text-red text-2xl lg:text-4xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            quos.
          </div>
          <div className="text-sm lg:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sunt,
            rem quia officia iure enim sit, maxime aliquid velit, eligendi
            commodi. Dignissimos iure quae id ad ullam. Accusamus quae dicta hic
            commodi id, nam nisi enim? Consequuntur ratione, unde repellendus
            doloribus beatae esse ducimus nihil dolor blanditiis quod
            praesentium qui aliquid voluptates similique voluptas eius dolores
            quia quae. Ullam sequi saepe sint quibusdam vel neque vitae autem,
            hic ad adipisci voluptatum accusamus optio consequuntur in!
          </div>
        </div>
        <div>
          <img
            src="../images/event2.jpg"
            alt=""
            className="md:w-[40vw]  md:h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Events;
