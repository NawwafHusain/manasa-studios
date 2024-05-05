import React from "react";
import Image from "next/image";
export default function Method() {
  return (
    <section
      className="lg:pt-40 pt-12 px-4 lg:px-16 relative mt-16 overflow-x-clip"
      id="methadology"
    >
      <h1 className="text-white lg:text-7xl text-6xl lg:text-left text-center lg:mb-24 mb-10">
        Methodolgy
      </h1>
      <div className="flex-1 max-w-screen hidden lg:flex flex-wrap gap-20 justify-around mt-16 space-y-10 text-white">
        {/*Requirments */}
        <div className="cards w-80 h-[22rem] rounded-3xl translate-y-8 relative">
          <div
            className={
              "absolute w-full h-full rounded-3xl overflow-clip top-0 left-0"
            }
          >
            <Image
              src={"/images/two-ended-cone.png"}
              width={600}
              height={600}
              alt="abstract shape background"
              className="absolute -right-10 -bottom-24 scale-[1.25] -z-10 opacity-60 rotate-12"
            />
          </div>
          <h2 className={"text-2xl mb-5"}>
            Requirements <br /> Gathering
          </h2>
          <p className={"text-sm w-[90%] font-light"}>
            Our web design journey begins with a deep understanding of your
            business goals and audience needs. We conduct research and consult
            you to define the project scope and chart a clear roadmap, ensuring
            that your expectations are precisely met.
          </p>
          <p className="absolute bottom-5 right-5 text-md">1</p>
          <svg
            width="340"
            height="89"
            viewBox="0 0 383 89"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-[-110%] bottom-0 "
          >
            <path
              d="M375.707 0.792893C375.317 0.402369 374.683 0.402369 374.293 0.792893L367.929 7.15685C367.538 7.54738 367.538 8.18054 367.929 8.57107C368.319 8.96159 368.953 8.96159 369.343 8.57107L375 2.91421L380.657 8.57107C381.047 8.96159 381.681 8.96159 382.071 8.57107C382.462 8.18054 382.462 7.54738 382.071 7.15685L375.707 0.792893ZM0 86.5C0.795201 86.5 1.60435 86.5017 2.42715 86.5049L2.43504 84.5049C1.60978 84.5017 0.797995 84.5 0 84.5V86.5ZM12.5633 86.6077C14.2272 86.6329 15.9315 86.662 17.6746 86.6945L17.7119 84.6948C15.9668 84.6623 14.2601 84.6331 12.5936 84.6079L12.5633 86.6077ZM27.8044 86.9073C29.4752 86.9455 31.1739 86.9856 32.8995 87.0271L32.9475 85.0277C31.2214 84.9862 29.5219 84.9461 27.8501 84.9078L27.8044 86.9073ZM43.0988 87.2785C44.7441 87.3196 46.4094 87.3613 48.0936 87.4032L48.1434 85.4038C46.4593 85.3619 44.7942 85.3202 43.1487 85.2791L43.0988 87.2785ZM58.2788 87.6523C59.9466 87.692 61.6301 87.7315 63.3282 87.7705L63.3741 85.771C61.6766 85.7321 59.9938 85.6926 58.3265 85.6529L58.2788 87.6523ZM73.4965 87.9923C75.1765 88.0267 76.8687 88.0603 78.5724 88.0927L78.6105 86.0931C76.9078 86.0607 75.2166 86.0271 73.5375 85.9927L73.4965 87.9923ZM88.7299 88.2688C90.4161 88.295 92.1119 88.3198 93.8166 88.3429L93.8437 86.343C92.1404 86.32 90.4459 86.2953 88.7609 86.2691L88.7299 88.2688ZM103.97 88.4583C105.659 88.4737 107.356 88.4871 109.059 88.4985L109.073 86.4985C107.371 86.4872 105.676 86.4737 103.988 86.4584L103.97 88.4583ZM119.214 88.5396C120.905 88.5419 122.6 88.5418 124.301 88.5392L124.298 86.5392C122.599 86.5418 120.905 86.5419 119.217 86.5396L119.214 88.5396ZM134.46 88.4927C136.151 88.4796 137.846 88.4638 139.544 88.445L139.522 86.4451C137.826 86.4639 136.133 86.4797 134.444 86.4927L134.46 88.4927ZM149.705 88.2971C151.397 88.2663 153.091 88.2324 154.786 88.1951L154.742 86.1956C153.049 86.2328 151.358 86.2667 149.669 86.2974L149.705 88.2971ZM164.949 87.931C166.641 87.8801 168.334 87.8255 170.027 87.7671L169.958 85.7683C168.268 85.8266 166.578 85.8811 164.889 85.9319L164.949 87.931ZM180.187 87.3705C181.88 87.2965 183.572 87.2183 185.264 87.1359L185.166 85.1383C183.478 85.2205 181.789 85.2985 180.1 85.3724L180.187 87.3705ZM195.416 86.5883C197.11 86.4878 198.802 86.3826 200.491 86.2728L200.361 84.277C198.676 84.3866 196.988 84.4915 195.298 84.5918L195.416 86.5883ZM210.631 85.5524C212.326 85.4214 214.017 85.2853 215.704 85.1439L215.537 83.1509C213.854 83.2919 212.168 83.4277 210.477 83.5583L210.631 85.5524ZM225.825 84.2248C227.52 84.0587 229.21 83.8867 230.894 83.7087L230.683 81.7198C229.005 81.8972 227.32 82.0687 225.63 82.2343L225.825 84.2248ZM240.99 82.5591C242.684 82.352 244.37 82.1382 246.049 81.9176L245.788 79.9346C244.115 80.1544 242.435 80.3675 240.747 80.5739L240.99 82.5591ZM256.113 80.4974C257.802 80.242 259.482 79.9791 261.152 79.7083L260.832 77.7341C259.169 78.0037 257.496 78.2655 255.814 78.5199L256.113 80.4974ZM271.173 77.966C272.853 77.6533 274.521 77.332 276.177 77.0017L275.785 75.0403C274.138 75.3689 272.479 75.6886 270.807 75.9998L271.173 77.966ZM286.138 74.8694C287.8 74.488 289.448 74.0966 291.08 73.6948L290.602 71.7527C288.981 72.1519 287.343 72.541 285.691 72.9201L286.138 74.8694ZM300.949 71.0819C302.582 70.6172 304.197 70.1408 305.792 69.6522L305.206 67.7399C303.624 68.2244 302.023 68.6971 300.402 69.1583L300.949 71.0819ZM315.509 66.436C317.117 65.8609 318.702 65.2713 320.261 64.667L319.538 62.8021C317.996 63.3999 316.428 63.9833 314.835 64.5528L315.509 66.436ZM329.646 60.7076C331.236 59.977 332.794 59.2277 334.318 58.4594L333.417 56.6736C331.916 57.4306 330.38 58.1694 328.811 58.8903L329.646 60.7076ZM343.255 53.4878C344.722 52.5855 346.148 51.6605 347.531 50.712L346.4 49.0625C345.045 49.9914 343.647 50.8985 342.207 51.7842L343.255 53.4878ZM355.65 44.4344C356.96 43.2858 358.215 42.1076 359.412 40.899L357.991 39.4916C356.828 40.6655 355.608 41.8116 354.331 42.9306L355.65 44.4344ZM366.053 33.0368C367.052 31.6311 367.98 30.1903 368.837 28.7136L367.107 27.7098C366.282 29.1322 365.386 30.5217 364.423 31.8789L366.053 33.0368ZM373.128 19.3174C373.68 17.7012 374.156 16.0488 374.552 14.3596L372.605 13.903C372.224 15.5281 371.766 17.117 371.235 18.6707L373.128 19.3174ZM375.942 4.14492C375.981 3.27177 376 2.39015 376 1.5H374C374 2.36128 373.981 3.21366 373.944 4.05726L375.942 4.14492Z"
              fill="white"
            />
          </svg>
        </div>
        {/*Ui */}
        <div className="cards w-80 h-[22rem] rounded-3xl -translate-y-24 relative">
          <div
            className={
              "absolute w-full h-full rounded-3xl overflow-clip top-0 left-0"
            }
          >
            <Image
              src={"/images/hexagon-curved-spikes.png"}
              width={600}
              height={600}
              alt="abstract shape background"
              className="absolute -left-20 -bottom-20 scale-[1.25] -z-10 opacity-60"
            />
          </div>
          <h2 className={"text-2xl mb-5"}>UI/UX Design</h2>
          <p className={"text-sm w-[90%] font-light"}>
            We emphasize the importance of a seamless user experience coupled
            with an engaging design that reflects your brand identity. Our team
            specializes in crafting intuitive interfaces and compelling user
            journeys that resonate with your target audience and reinforce your
            online presence while aligning with your business needs.
          </p>
          <p className="absolute bottom-5 right-5 text-md">2</p>
          <svg
            width="340"
            height="89"
            viewBox="0 0 383 89"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-[-110%] top-0 "
          >
            <path
              d="M375.707 88.2481C375.317 88.6386 374.683 88.6386 374.293 88.2481L367.929 81.8842C367.538 81.4936 367.538 80.8605 367.929 80.4699C368.319 80.0794 368.953 80.0794 369.343 80.4699L375 86.1268L380.657 80.4699C381.047 80.0794 381.681 80.0794 382.071 80.4699C382.462 80.8605 382.462 81.4936 382.071 81.8842L375.707 88.2481ZM0 2.54102C0.795201 2.54102 1.60435 2.53935 2.42715 2.5361L2.43504 4.53609C1.60978 4.53934 0.797995 4.54102 0 4.54102V2.54102ZM12.5633 2.43336C14.2272 2.40814 15.9315 2.37901 17.6746 2.34652L17.7119 4.34618C15.9668 4.3787 14.2601 4.40787 12.5936 4.43313L12.5633 2.43336ZM27.8044 2.13372C29.4752 2.09548 31.1739 2.05542 32.8995 2.01393L32.9475 4.01335C31.2214 4.05486 29.5219 4.09494 27.8501 4.13319L27.8044 2.13372ZM43.0988 1.76251C44.7441 1.72141 46.4094 1.67975 48.0936 1.63783L48.1434 3.63721C46.4593 3.67913 44.7942 3.72078 43.1487 3.76188L43.0988 1.76251ZM58.2788 1.38873C59.9466 1.34897 61.6301 1.30947 63.3282 1.27049L63.3741 3.26997C61.6766 3.30893 59.9938 3.34841 58.3265 3.38816L58.2788 1.38873ZM73.4965 1.04876C75.1765 1.01427 76.8687 0.980703 78.5724 0.948275L78.6105 2.94791C76.9078 2.98032 75.2166 3.01387 73.5375 3.04834L73.4965 1.04876ZM88.7299 0.772166C90.4161 0.745975 92.1119 0.721242 93.8166 0.698164L93.8437 2.69798C92.1404 2.72104 90.4459 2.74575 88.7609 2.77192L88.7299 0.772166ZM103.97 0.582713C105.659 0.567335 107.356 0.553885 109.059 0.542543L109.073 2.5425C107.371 2.55383 105.676 2.56727 103.988 2.58263L103.97 0.582713ZM119.214 0.501403C120.905 0.499126 122.6 0.499207 124.301 0.501814L124.298 2.50181C122.599 2.49921 120.905 2.49913 119.217 2.5014L119.214 0.501403ZM134.46 0.548334C136.151 0.561399 137.846 0.577233 139.544 0.595999L139.522 2.59588C137.826 2.57714 136.133 2.56132 134.444 2.54827L134.46 0.548334ZM149.705 0.743941C151.397 0.774679 153.091 0.808602 154.786 0.845866L154.742 2.84538C153.049 2.80818 151.358 2.7743 149.669 2.74361L149.705 0.743941ZM164.949 1.10998C166.641 1.16094 168.334 1.21552 170.027 1.27387L169.958 3.27268C168.268 3.21444 166.578 3.15995 164.889 3.10908L164.949 1.10998ZM180.187 1.67048C181.88 1.74455 183.572 1.82269 185.264 1.90507L185.166 3.9027C183.478 3.82049 181.789 3.74249 180.1 3.66857L180.187 1.67048ZM195.416 2.45275C197.11 2.55327 198.802 2.65838 200.491 2.76824L200.361 4.76402C198.676 4.65441 196.988 4.54953 195.298 4.44924L195.416 2.45275ZM210.631 3.48864C212.326 3.61958 214.017 3.75569 215.704 3.89713L215.537 5.89014C213.854 5.74907 212.168 5.61331 210.477 5.4827L210.631 3.48864ZM225.825 4.81621C227.52 4.98234 229.21 5.15431 230.894 5.33229L230.683 7.32121C229.005 7.14377 227.32 6.97231 225.63 6.80667L225.825 4.81621ZM240.99 6.48188C242.684 6.68904 244.37 6.90283 246.049 7.12342L245.788 9.10638C244.115 8.88658 242.435 8.67354 240.747 8.46708L240.99 6.48188ZM256.113 8.54359C257.802 8.79899 259.482 9.06196 261.152 9.33269L260.832 11.3069C259.169 11.0374 257.496 10.7755 255.814 10.5211L256.113 8.54359ZM271.173 11.075C272.853 11.3877 274.521 11.7091 276.177 12.0394L275.785 14.0007C274.138 13.6721 272.479 13.3524 270.807 13.0412L271.173 11.075ZM286.138 14.1716C287.8 14.553 289.448 14.9444 291.08 15.3463L290.602 17.2883C288.981 16.8891 287.343 16.5 285.691 16.1209L286.138 14.1716ZM300.949 17.9591C302.582 18.4238 304.197 18.9003 305.792 19.3888L305.206 21.3011C303.624 20.8166 302.023 20.3439 300.402 19.8827L300.949 17.9591ZM315.509 22.605C317.117 23.1802 318.702 23.7697 320.261 24.374L319.538 26.2389C317.996 25.6411 316.428 25.0577 314.835 24.4882L315.509 22.605ZM329.646 28.3334C331.236 29.064 332.794 29.8133 334.318 30.5816L333.417 32.3675C331.916 31.6104 330.38 30.8717 328.811 30.1507L329.646 28.3334ZM343.255 35.5532C344.722 36.4555 346.148 37.3806 347.531 38.329L346.4 39.9785C345.045 39.0496 343.647 38.1425 342.207 37.2568L343.255 35.5532ZM355.65 44.6066C356.96 45.7552 358.215 46.9334 359.412 48.1421L357.991 49.5494C356.828 48.3755 355.608 47.2294 354.331 46.1104L355.65 44.6066ZM366.053 56.0042C367.052 57.4099 367.98 58.8507 368.837 60.3274L367.107 61.3312C366.282 59.9088 365.386 58.5193 364.423 57.1621L366.053 56.0042ZM373.128 69.7236C373.68 71.3398 374.156 72.9922 374.552 74.6814L372.605 75.138C372.224 73.5129 371.766 71.924 371.235 70.3703L373.128 69.7236ZM375.942 84.8961C375.981 85.7692 376 86.6509 376 87.541H374C374 86.6797 373.981 85.8274 373.944 84.9838L375.942 84.8961Z"
              fill="white"
            />
          </svg>
        </div>
        {/* First Draft */}
        <div className="cards w-80 h-[22rem] rounded-3xl relative">
          <div
            className={
              "absolute w-full h-full rounded-3xl overflow-clip top-0 left-0"
            }
          >
            <Image
              src={"/images/triple-stacked-cuboids.png"}
              width={600}
              height={600}
              alt="abstract shape background"
              className="absolute -right-36 scale-[1.55] -z-10 opacity-60 -rotate-12"
            />
          </div>
          <h2 className={"text-2xl mb-5"}>First Draft Development</h2>
          <p className={"text-sm w-[90%] font-light"}>
            The development of the first draft brings your vision to life. With
            meticulous attention to detail, we translate the finalized design
            into a functional prototype. This phase allows us to iterate quickly
            and integrate feedback, ensuring the end product is not only
            visually appealing but technically sound. In this phase, we focus on
            developing core functionality and overall site architecture and
            implenet any changes needed based on feedback.
          </p>
          <p className="absolute bottom-5 right-5 text-md">3</p>
          <svg
            width="247"
            height="170"
            viewBox="0 0 247 190"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute  -bottom-44 right-[50%] "
          >
            <path
              d="M8.70711 189.707C8.31658 190.098 7.68342 190.098 7.29289 189.707L0.928932 183.343C0.538408 182.953 0.538408 182.319 0.928932 181.929C1.31946 181.538 1.95262 181.538 2.34315 181.929L8 187.586L13.6569 181.929C14.0474 181.538 14.6805 181.538 15.0711 181.929C15.4616 182.319 15.4616 182.953 15.0711 183.343L8.70711 189.707ZM7 189C7 188.107 7.01349 187.224 7.04029 186.351L9.03934 186.412C9.01319 187.264 9 188.127 9 189H7ZM8.01708 176.189C8.30439 174.467 8.65106 172.79 9.05512 171.158L10.9965 171.638C10.6051 173.22 10.2688 174.846 9.98981 176.518L8.01708 176.189ZM12.3322 161.464C13.0254 159.879 13.7816 158.342 14.5981 156.852L16.352 157.813C15.564 159.251 14.834 160.734 14.1647 162.265L12.3322 161.464ZM20.2968 148.335C21.3656 147.003 22.4907 145.716 23.6689 144.471L25.1216 145.846C23.9795 147.053 22.8903 148.299 21.8565 149.587L20.2968 148.335ZM31.2278 137.584C32.5562 136.533 33.9284 135.517 35.3417 134.534L36.4841 136.175C35.1027 137.137 33.7634 138.129 32.4688 139.153L31.2278 137.584ZM44.0224 129.156C45.4846 128.346 46.9784 127.561 48.5017 126.799L49.3966 128.588C47.8968 129.338 46.4277 130.11 44.9912 130.906L44.0224 129.156ZM57.7555 122.577C59.3169 121.926 60.9017 121.292 62.508 120.674L63.2261 122.54C61.6362 123.152 60.0687 123.779 58.5256 124.423L57.7555 122.577ZM72.0581 117.255C73.642 116.726 75.2418 116.208 76.8561 115.701L77.4561 117.609C75.8523 118.113 74.2637 118.627 72.6918 119.152L72.0581 117.255ZM86.5725 112.803C88.1904 112.344 89.8192 111.891 91.4575 111.445L91.9832 113.375C90.3512 113.819 88.7292 114.27 87.1187 114.727L86.5725 112.803ZM101.242 108.866C102.873 108.448 104.511 108.033 106.154 107.621L106.641 109.561C105 109.973 103.366 110.386 101.738 110.803L101.242 108.866ZM115.972 105.189C117.602 104.789 119.238 104.387 120.872 103.986L121.349 105.928C119.712 106.33 118.081 106.73 116.449 107.132L115.972 105.189ZM130.682 101.557C132.315 101.148 133.946 100.736 135.575 100.32L136.07 102.258C134.438 102.675 132.803 103.088 131.168 103.497L130.682 101.557ZM145.34 97.7575C146.965 97.3179 148.585 96.8721 150.199 96.4189L150.739 98.3445C149.119 98.7995 147.493 99.247 145.863 99.6881L145.34 97.7575ZM159.864 93.5834C161.481 93.086 163.09 92.5788 164.688 92.0607L165.305 93.9632C163.696 94.4846 162.078 94.9949 160.451 95.4951L159.864 93.5834ZM174.209 88.7859C175.789 88.2084 177.354 87.6173 178.905 87.0113L179.633 88.8741C178.068 89.4857 176.489 90.082 174.896 90.6643L174.209 88.7859ZM188.175 83.1141C189.71 82.4192 191.225 81.7059 192.718 80.9728L193.599 82.7683C192.086 83.5109 190.553 84.233 189 84.936L188.175 83.1141ZM201.56 76.244C203.012 75.3961 204.438 74.5242 205.837 73.6269L206.917 75.3102C205.494 76.2232 204.044 77.1097 202.569 77.9711L201.56 76.244ZM213.993 67.8401C215.306 66.8076 216.586 65.7453 217.831 64.6517L219.151 66.1546C217.877 67.2728 216.57 68.358 215.229 69.4121L213.993 67.8401ZM224.926 57.645C226.034 56.4079 227.104 55.1357 228.133 53.8266L229.706 55.0627C228.649 56.4063 227.552 57.7114 226.415 58.9798L224.926 57.645ZM233.752 45.6109C234.586 44.1951 235.38 42.7415 236.13 41.2485L237.917 42.1464C237.147 43.6795 236.332 45.1724 235.475 46.6265L233.752 45.6109ZM240.005 32.0764C240.544 30.5315 241.042 28.9493 241.498 27.3285L243.423 27.87C242.956 29.5297 242.446 31.1508 241.894 32.7347L240.005 32.0764ZM243.64 17.6078C243.91 15.9563 244.141 14.2691 244.333 12.5452L246.32 12.7655C246.126 14.5231 245.89 16.2444 245.614 17.9306L243.64 17.6078ZM244.973 2.63904C244.991 1.78126 245 0.915283 245 0.0410156H247C247 0.929159 246.991 1.80918 246.972 2.68118L244.973 2.63904Z"
              fill="white"
            />
          </svg>
        </div>
        {/* bottom part*/}
        <div className="w-screen flex gap-60 justify-center">
          {/*Second Draft */}
          <div className="cards w-80 h-[22rem] rounded-3xl relative">
            <div
              className={
                "absolute w-full h-full rounded-3xl overflow-clip top-0 left-0"
              }
            >
              <Image
                src={"/images/wireframe-globe.png"}
                width={600}
                height={600}
                alt="abstract shape background"
                className="absolute -right-40 scale-150 -z-10 opacity-60"
              />
            </div>
            <h2 className={"text-2xl mb-5"}>Second Draft Developement</h2>
            <p className={"text-sm w-[90%] font-light"}>
              Building upon the first draft, the second phase of development
              focuses on refining features, optimizing user interfaces, and
              ensuring responsiveness across all devices. At this stage, we
              incorporate initial feedback to enhance functionality and user
              interaction, getting closer to the polished version of your
              digital product.
            </p>
            <p className="absolute bottom-5 right-5 text-md">5</p>
            <svg
              width="247"
              height="190"
              viewBox="0 0 247 190"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute  bottom-[20%] -right-[75%]  flip rotate-90"
            >
              <path
                d="M8.70711 189.707C8.31658 190.098 7.68342 190.098 7.29289 189.707L0.928932 183.343C0.538408 182.953 0.538408 182.319 0.928932 181.929C1.31946 181.538 1.95262 181.538 2.34315 181.929L8 187.586L13.6569 181.929C14.0474 181.538 14.6805 181.538 15.0711 181.929C15.4616 182.319 15.4616 182.953 15.0711 183.343L8.70711 189.707ZM7 189C7 188.107 7.01349 187.224 7.04029 186.351L9.03934 186.412C9.01319 187.264 9 188.127 9 189H7ZM8.01708 176.189C8.30439 174.467 8.65106 172.79 9.05512 171.158L10.9965 171.638C10.6051 173.22 10.2688 174.846 9.98981 176.518L8.01708 176.189ZM12.3322 161.464C13.0254 159.879 13.7816 158.342 14.5981 156.852L16.352 157.813C15.564 159.251 14.834 160.734 14.1647 162.265L12.3322 161.464ZM20.2968 148.335C21.3656 147.003 22.4907 145.716 23.6689 144.471L25.1216 145.846C23.9795 147.053 22.8903 148.299 21.8565 149.587L20.2968 148.335ZM31.2278 137.584C32.5562 136.533 33.9284 135.517 35.3417 134.534L36.4841 136.175C35.1027 137.137 33.7634 138.129 32.4688 139.153L31.2278 137.584ZM44.0224 129.156C45.4846 128.346 46.9784 127.561 48.5017 126.799L49.3966 128.588C47.8968 129.338 46.4277 130.11 44.9912 130.906L44.0224 129.156ZM57.7555 122.577C59.3169 121.926 60.9017 121.292 62.508 120.674L63.2261 122.54C61.6362 123.152 60.0687 123.779 58.5256 124.423L57.7555 122.577ZM72.0581 117.255C73.642 116.726 75.2418 116.208 76.8561 115.701L77.4561 117.609C75.8523 118.113 74.2637 118.627 72.6918 119.152L72.0581 117.255ZM86.5725 112.803C88.1904 112.344 89.8192 111.891 91.4575 111.445L91.9832 113.375C90.3512 113.819 88.7292 114.27 87.1187 114.727L86.5725 112.803ZM101.242 108.866C102.873 108.448 104.511 108.033 106.154 107.621L106.641 109.561C105 109.973 103.366 110.386 101.738 110.803L101.242 108.866ZM115.972 105.189C117.602 104.789 119.238 104.387 120.872 103.986L121.349 105.928C119.712 106.33 118.081 106.73 116.449 107.132L115.972 105.189ZM130.682 101.557C132.315 101.148 133.946 100.736 135.575 100.32L136.07 102.258C134.438 102.675 132.803 103.088 131.168 103.497L130.682 101.557ZM145.34 97.7575C146.965 97.3179 148.585 96.8721 150.199 96.4189L150.739 98.3445C149.119 98.7995 147.493 99.247 145.863 99.6881L145.34 97.7575ZM159.864 93.5834C161.481 93.086 163.09 92.5788 164.688 92.0607L165.305 93.9632C163.696 94.4846 162.078 94.9949 160.451 95.4951L159.864 93.5834ZM174.209 88.7859C175.789 88.2084 177.354 87.6173 178.905 87.0113L179.633 88.8741C178.068 89.4857 176.489 90.082 174.896 90.6643L174.209 88.7859ZM188.175 83.1141C189.71 82.4192 191.225 81.7059 192.718 80.9728L193.599 82.7683C192.086 83.5109 190.553 84.233 189 84.936L188.175 83.1141ZM201.56 76.244C203.012 75.3961 204.438 74.5242 205.837 73.6269L206.917 75.3102C205.494 76.2232 204.044 77.1097 202.569 77.9711L201.56 76.244ZM213.993 67.8401C215.306 66.8076 216.586 65.7453 217.831 64.6517L219.151 66.1546C217.877 67.2728 216.57 68.358 215.229 69.4121L213.993 67.8401ZM224.926 57.645C226.034 56.4079 227.104 55.1357 228.133 53.8266L229.706 55.0627C228.649 56.4063 227.552 57.7114 226.415 58.9798L224.926 57.645ZM233.752 45.6109C234.586 44.1951 235.38 42.7415 236.13 41.2485L237.917 42.1464C237.147 43.6795 236.332 45.1724 235.475 46.6265L233.752 45.6109ZM240.005 32.0764C240.544 30.5315 241.042 28.9493 241.498 27.3285L243.423 27.87C242.956 29.5297 242.446 31.1508 241.894 32.7347L240.005 32.0764ZM243.64 17.6078C243.91 15.9563 244.141 14.2691 244.333 12.5452L246.32 12.7655C246.126 14.5231 245.89 16.2444 245.614 17.9306L243.64 17.6078ZM244.973 2.63904C244.991 1.78126 245 0.915283 245 0.0410156H247C247 0.929159 246.991 1.80918 246.972 2.68118L244.973 2.63904Z"
                fill="white"
              />
            </svg>
          </div>
          {/*Final */}
          <div className="cards w-80 h-[22rem] rounded-3xl translate-y-16">
            <div
              className={
                "absolute w-full h-full rounded-3xl overflow-clip top-0 left-0"
              }
            >
              <Image
                src={"/images/stacked-cube.png"}
                width={700}
                height={700}
                alt="abstract shape background"
                className="absolute -left-20 -bottom-20 scale-[1.25] -z-10 opacity-60"
              />
            </div>
            <h2 className={"text-2xl mb-5"}>Final Delivery and Deployment</h2>
            <p className={"text-sm w-[90%] font-light"}>
              The final stretch involves rigorous testing, quality assurance,
              and preparing the deployment strategy. Upon final approval, we
              launch your website or application, ensuring it&apos;s fully
              optimized for performance and SEO. Post-launch, we continue to
              offer support and maintenance to guarantee the longevity and
              success of your project.
            </p>
            <p className="absolute bottom-5 right-5 text-md">4</p>
          </div>
        </div>
      </div>
      {/*Mobile View*/}
      <div className="flex-1 max-w-screen lg:hidden flex flex-wrap justify-around space-y-5 text-white">
        {/*Requirments */}
        <div className="cards w-80 h-[22rem] rounded-3xl relative">
          <div
            className={
              "absolute w-full h-full rounded-3xl overflow-clip top-0 left-0"
            }
          >
            <Image
              src={"/images/two-ended-cone.png"}
              width={600}
              height={600}
              alt="abstract shape background"
              className="absolute -right-10 -bottom-24 scale-[1.25] -z-10 opacity-60 rotate-12"
            />
          </div>
          <h2 className={"text-2xl mb-5"}>
            Requirements <br /> Gathering
          </h2>
          <p className={"text-sm w-[90%] font-light"}>
            Our web design journey begins with a deep understanding of your
            business goals and audience needs. We conduct research and consult
            you to define the project scope and chart a clear roadmap, ensuring
            that your expectations are precisely met.
          </p>
          <p className="absolute bottom-5 right-5 text-md">1</p>
        </div>
        {/*Ui */}
        <div className="cards w-80 h-[22rem] rounded-3xl relative">
          <div
            className={
              "absolute w-full h-full rounded-3xl overflow-clip top-0 left-0"
            }
          >
            <Image
              src={"/images/hexagon-curved-spikes.png"}
              width={600}
              height={600}
              alt="abstract shape background"
              className="absolute -left-20 -bottom-20 scale-[1.25] -z-10 opacity-60"
            />
          </div>
          <h2 className={"text-2xl mb-5"}>UI/UX Design</h2>
          <p className={"text-sm w-[90%] font-light"}>
            We emphasize the importance of a seamless user experience coupled
            with an engaging design that reflects your brand identity. Our team
            specializes in crafting intuitive interfaces and compelling user
            journeys that resonate with your target audience and reinforce your
            online presence while aligning with your business needs.
          </p>
          <p className="absolute bottom-5 right-5 text-md">2</p>
        </div>
        {/* First Draft */}
        <div className="cards w-80 h-[22rem] rounded-3xl relative">
          <div
            className={
              "absolute w-full h-full rounded-3xl overflow-clip top-0 left-0"
            }
          >
            <Image
              src={"/images/triple-stacked-cuboids.png"}
              width={600}
              height={600}
              alt="abstract shape background"
              className="absolute -right-36 scale-[1.55] -z-10 opacity-60 -rotate-12"
            />
          </div>
          <h2 className={"text-2xl mb-5"}>First Draft Development</h2>
          <p className={"text-sm w-[90%] font-light"}>
            The development of the first draft brings your vision to life. With
            meticulous attention to detail, we translate the finalized design
            into a functional prototype. This phase allows us to iterate quickly
            and integrate feedback, ensuring the end product is not only
            visually appealing but technically sound. In this phase, we focus on
            developing core functionality and overall site architecture and
            implenet any changes needed based on feedback.
          </p>
          <p className="absolute bottom-5 right-5 text-md">3</p>
        </div>
        {/*Second Draft */}
        <div className="cards w-80 h-[22rem] rounded-3xl relative">
          <div
            className={
              "absolute w-full h-full rounded-3xl overflow-clip top-0 left-0"
            }
          >
            <Image
              src={"/images/wireframe-globe.png"}
              width={600}
              height={600}
              alt="abstract shape background"
              className="absolute -right-40 scale-150 -z-10 opacity-60"
            />
          </div>
          <h2 className={"text-2xl mb-5"}>Second Draft Developement</h2>
          <p className={"text-sm w-[90%] font-light"}>
            Building upon the first draft, the second phase of development
            focuses on refining features, optimizing user interfaces, and
            ensuring responsiveness across all devices. At this stage, we
            incorporate initial feedback to enhance functionality and user
            interaction, getting closer to the polished version of your digital
            product.
          </p>
          <p className="absolute bottom-5 right-5 text-md">5</p>
        </div>
        {/*Final */}
        <div className="cards w-80 h-[22rem] rounded-3xl">
          <div
            className={
              "absolute w-full h-full rounded-3xl overflow-clip top-0 left-0"
            }
          >
            <Image
              src={"/images/stacked-cube.png"}
              width={700}
              height={700}
              alt="abstract shape background"
              className="absolute -left-20 -bottom-20 scale-[1.25] -z-10 opacity-60"
            />
          </div>
          <h2 className={"text-2xl mb-5"}>Final Delivery and Deployment</h2>
          <p className={"text-sm w-[90%] font-light"}>
            The final stretch involves rigorous testing, quality assurance, and
            preparing the deployment strategy. Upon final approval, we launch
            your website or application, ensuring it&apos;s fully optimized for
            performance and SEO. Post-launch, we continue to offer support and
            maintenance to guarantee the longevity and success of your project.
          </p>
          <p className="absolute bottom-5 right-5 text-md">4</p>
        </div>
      </div>
    </section>
  );
}
