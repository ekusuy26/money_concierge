import { SvgProps } from "@/interfaces/interface";

export default function Svg({ slug, size }: SvgProps) {
  const icon = getIcon(slug);
  const sizeCls = size ? `h-${size} w-${size}` : "h-8 w-8";
  return (
    <>
      <div className={`${sizeCls} inline-block`}>{icon}</div>
    </>
  );
}

function getIcon(slug: string) {
  if (slug === "close") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        viewBox="0 -960 960 960"
        width="100%"
      >
        <path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
      </svg>
    );
  }

  if (slug === "regist") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        viewBox="0 -960 960 960"
        width="100%"
      >
        <path d="M180-12q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h405l-60 60H180v600h600v-348l60-60v408q0 24-18 42t-42 18H180Zm300-360Zm182-352 43 42-285 284v86h85l286-286 42 42-303 304H360v-170l302-302Zm171 168L662-724l100-100q17-17 42.311-17T847-823l84 85q17 18 17 42.472T930-654l-97 98Z" />
      </svg>
    );
  }
  if (slug === "food") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        viewBox="0 -960 960 960"
        width="100%"
      >
        <path d="M285-80v-368q-52-11-88.5-52.5T160-600v-280h60v280h65v-280h60v280h65v-280h60v280q0 58-36.5 99.5T345-448v368h-60Zm415 0v-320H585v-305q0-79 48-127t127-48v800h-60Z" />
      </svg>
    );
  }
  if (slug === "miscellaneous") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        viewBox="0 -960 960 960"
        width="100%"
      >
        <path d="M431-330q1-72 16.5-105t58.5-72q42-38 64.5-70.5T593-647q0-45-30-75t-84-30q-52 0-80 29.5T358-661l-84-37q22-59 74.5-100.5T479-840q100 0 154 55.5T687-651q0 48-20.5 87T601-482q-49 47-59 72t-11 80H431Zm48 250q-29 0-49.5-20.5T409-150q0-29 20.5-49.5T479-220q29 0 49.5 20.5T549-150q0 29-20.5 49.5T479-80Z" />
      </svg>
    );
  }
  if (slug === "communication") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        viewBox="0 -960 960 960"
        width="100%"
      >
        <path d="M198-278q-60-58-89-133T80-560q0-74 29-149t89-133l35 35q-50 49-76.5 116.5T130-560q0 63 26.5 130.5T233-313l-35 35Zm92-92q-40-37-59-89.5T212-560q0-48 19-100.5t59-89.5l35 35q-29 29-46 72.5T262-560q0 35 17.5 79.5T325-405l-35 35Zm4 290 133-405q-17-12-27.5-31T389-560q0-38 26.5-64.5T480-651q38 0 64.5 26.5T571-560q0 25-10.5 44T533-485L666-80h-59l-29-90H383l-30 90h-59Zm108-150h156l-78-238-78 238Zm268-140-35-35q29-29 46-72.5t17-82.5q0-35-17.5-79.5T635-715l35-35q39 37 58.5 89.5T748-560q0 47-19.5 100T670-370Zm92 92-35-35q49-49 76-116.5T830-560q0-63-27-130.5T727-807l35-35q60 58 89 133t29 149q0 75-27.5 149.5T762-278Z" />
      </svg>
    );
  }
  if (slug === "hobby") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        viewBox="0 -960 960 960"
        width="100%"
      >
        <path d="M147-200q-38 0-59.5-25.5T72-296l48-335q8-53 49.5-91t94.5-38h433q53 0 94.5 38t49.5 91l47 335q6 45-15.5 70.5T813-200q-23 0-39-7.5T747-226L643-330H317L213-226q-11 11-27 18.5t-39 7.5Zm18-64 126-126h378l126 126q5 5 18 9 9 0 13.5-9t2.5-18l-48-339q-5-35-29.5-57T697-700H263q-30 0-54.5 22T179-621l-48 339q-2 9 2.5 18t13.5 9q7 0 18-9Zm535-176q16 0 28-12t12-28q0-16-12-28t-28-12q-16 0-28 12t-12 28q0 16 12 28t28 12Zm-85-130q16 0 28-12t12-28q0-16-12-28t-28-12q-16 0-28 12t-12 28q0 16 12 28t28 12ZM300-445h50v-75h75v-50h-75v-75h-50v75h-75v50h75v75Zm180-33Z" />
      </svg>
    );
  }
  if (slug === "clothes") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        viewBox="0 -960 960 960"
        width="100%"
      >
        <path d="M165-480 45-688l264-152h51q16 45 45 82.5t75 37.5q47 0 76-37.5t44-82.5h51l263 153-119 207-75-41v216l-60 51v-369l113 62 59-104-188-110q-26 53-70 84t-94 31q-49 0-93.5-31T316-775L127-665l61 104 112-62v225q-15 2-30.5 6.5T240-380v-141l-75 41Zm22 291-39-46 79-67q23-19 51-29t57-10q29 0 56.5 10t50.5 29l116 99q14 12 31.5 17.5T626-180q18 0 36-5.5t32-17.5l79-69 39 47-79 67q-23 19-50.5 28.5T626-120q-29 0-57-9.5T518-158l-115-99q-14-12-32-17.5t-36-5.5q-19 0-36.5 5.5T267-257l-80 68Zm293-471Z" />
      </svg>
    );
  }
  if (slug === "car") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        viewBox="0 -960 960 960"
        width="100%"
      >
        <path d="M200-204v54q0 12.75-8.625 21.375T170-120h-20q-12.75 0-21.375-8.625T120-150v-324l85-256q5-14 16.5-22t26.5-8h464q15 0 26.5 8t16.5 22l85 256v324q0 12.75-8.625 21.375T810-120h-21q-13 0-21-8.625T760-150v-54H200Zm3-330h554l-55-166H258l-55 166Zm-23 60v210-210Zm105.765 160Q309-314 324.5-329.75T340-368q0-23.333-15.75-39.667Q308.5-424 286-424q-23.333 0-39.667 16.265Q230-391.471 230-368.235 230-345 246.265-329.5q16.264 15.5 39.5 15.5ZM675-314q23.333 0 39.667-15.75Q731-345.5 731-368q0-23.333-16.265-39.667Q698.471-424 675.235-424 652-424 636.5-407.735q-15.5 16.264-15.5 39.5Q621-345 636.75-329.5T675-314Zm-495 50h600v-210H180v210Z" />
      </svg>
    );
  }
  if (slug === "beauty") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        viewBox="0 -960 960 960"
        width="100%"
      >
        <path d="M660-40q-8.5 0-14.25-5.75T640-60q0-8.5 5.75-14.25T660-80h140v-60H660q-8.5 0-14.25-5.75T640-160q0-8.5 5.75-14.25T660-180h140v-60H660q-8.5 0-14.25-5.75T640-260q0-8.5 5.75-14.25T660-280h140v-60H660q-8.5 0-14.25-5.75T640-360q0-8.5 5.75-14.25T660-380h140v-60H660q-8.5 0-14.25-5.75T640-460q0-8.5 5.75-14.25T660-480h140v-60H660q-8.5 0-14.25-5.75T640-560q0-8.5 5.75-14.25T660-580h160q24.75 0 42.375 17.625T880-520v420q0 24.75-17.625 42.375T820-40H660ZM319.823-340Q394-340 447-410.871t53-169Q500-678 447.177-749q-52.823-71-127-71Q246-820 193-749.129t-53 169Q140-482 192.823-411q52.823 71 127 71ZM320-40q-39 0-63.5-29T237-136l17-155q-76-27-125-106.5T80-580q0-125 70-212.5T320-880q100 0 170 87.5T560-580q0 103-49.5 182.5T385-291l18 155q5 38-19.5 67T320-40Z" />
      </svg>
    );
  }
  if (slug === "special") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        viewBox="0 -960 960 960"
        width="100%"
      >
        <path d="m320-240 160-122 160 122-64-197 160-113H541l-61-203-62 203H223l160 113-63 197ZM480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z" />
      </svg>
    );
  }
  if (slug === "lifeLine") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        viewBox="0 -960 960 960"
        width="100%"
      >
        <path d="M80-370v-60h200v-70h-90q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T190-560h90q24.75 0 42.375 17.625T340-500v70h110v-296q0-64 45.5-109T605-880q44 0 80 22.5t56 61.5l42 84-55 27-41-83q-12-23-34.449-37.5-22.449-14.5-48.265-14.5Q565-820 537.5-792.583 510-765.167 510-726v296h110v-70q0-24.75 17.625-42.375T680-560h90q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T770-500h-90v70h200v60H80Zm140 250q-24.75 0-42.375-17.625T160-180v-190h60v190h520v-190h60v180q0 28.875-20.562 49.438Q758.875-120 730-120H220Z" />
      </svg>
    );
  }
  if (slug === "dailyNecessities") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        viewBox="0 -960 960 960"
        width="100%"
      >
        <path d="M260-140h440v-120h-80v-260h-80v-60h160v-120H260v120h80v260h80v60H260v120Zm0 60q-24.75 0-42.375-17.625T200-140v-120q0-24.75 17.625-42.375T260-320h20v-200h-20q-24.75 0-42.375-17.625T200-580v-120q0-24.75 17.625-42.375T260-760h150v-60h-50v-60h240v60h-50v60h150q24.75 0 42.375 17.625T760-700v120q0 24.75-17.625 42.375T700-520h-20v200h20q24.75 0 42.375 17.625T760-260v120q0 24.75-17.625 42.375T700-80H260Zm220-340Z" />
      </svg>
    );
  }
  if (slug === "education") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        viewBox="0 -960 960 960"
        width="100%"
      >
        <path d="M479-120 189-279v-240L40-600l439-240 441 240v317h-60v-282l-91 46v240L479-120Zm0-308 315-172-315-169-313 169 313 172Zm0 240 230-127v-168L479-360 249-485v170l230 127Zm1-240Zm-1 74Zm0 0Z" />
      </svg>
    );
  }
  if (slug === "medical") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        viewBox="0 -960 960 960"
        width="100%"
      >
        <path d="M345-120q-94 0-159.5-65.5T120-345q0-45 17-86t49-73l270-270q32-32 73-49t86-17q94 0 159.5 65.5T840-615q0 45-17 86t-49 73L504-186q-32 32-73 49t-86 17Zm273-265 114-113q23-23 35.5-53.5T780-615q0-69-48-117t-117-48q-33 0-63.5 12.5T498-732L385-618l233 233ZM345-180q32 0 63-12.5t54-35.5l113-114-233-233-114 113q-23 23-35.5 53.5T180-345q0 69 48 117t117 48Z" />
      </svg>
    );
  }
  if (slug === "insurance") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        viewBox="0 -960 960 960"
        width="100%"
      >
        <path d="M435-279h90v-156h156v-90H525v-156h-90v156H279v90h156v156ZM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm0-600v600-600Z" />
      </svg>
    );
  }
  if (slug === "residence") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        viewBox="0 -960 960 960"
        width="100%"
      >
        <path d="M200-160v-320H80l400-360 200 177v-117h80v191l120 108.574H760V-160H530v-240H430v240H200Zm60-60h110v-240h220v240h110v-341L480-761 260-561v341Zm110-240h220-220Zm25-110h170q0-33-25.5-54.5T480-646q-34 0-59.5 21.342Q395-603.315 395-570Z" />
      </svg>
    );
  }
  if (slug === "companionship") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        viewBox="0 -960 960 960"
        width="100%"
      >
        <path d="M206-478 64-620l142-141 141 141-141 142ZM373-80v-212.683Q309-298 246-306.5T120-330l15-60q85.268 20 171.044 28.5 85.776 8.5 174.09 8.5 88.314 0 174.09-8.5Q740-370 825-390l15 60q-63 15-125.983 23.708Q651.033-297.583 587-293v213H373ZM206-561l58-59-58-58-59 58 59 59Zm273.882-139Q434-700 402-732.118q-32-32.117-32-78Q370-856 402.118-888q32.117-32 78-32Q526-920 558-887.882q32 32.117 32 78Q590-764 557.882-732q-32.117 32-78 32Zm.198 286q-30.08 0-51.58-21.42-21.5-21.421-21.5-51.5 0-30.08 21.42-51.58 21.421-21.5 51.5-21.5 30.08 0 51.58 21.42 21.5 21.421 21.5 51.5 0 30.08-21.42 51.58-21.421 21.5-51.5 21.5Zm-.255-346Q501-760 515.5-774.325q14.5-14.324 14.5-35.5Q530-831 515.675-845.5q-14.324-14.5-35.5-14.5Q459-860 444.5-845.675q-14.5 14.324-14.5 35.5Q430-789 444.325-774.5q14.324 14.5 35.5 14.5ZM698-490l-62-110 62.333-110H823l62 110-62.333 110H698Zm34.667-60H788l28-50-27.667-50H733l-28 50 27.667 50ZM206-620Zm274-190Zm281 210Z" />
      </svg>
    );
  }
  if (slug === "traffic") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        viewBox="0 -960 960 960"
        width="100%"
      >
        <path d="M160-340v-380q0-41 19-71.5t58.5-50q39.5-19.5 100-29T480-880q86 0 146.5 9t99 28.5Q764-823 782-793t18 73v380q0 59-40.5 99.5T660-200l60 60v20h-70l-80-80H390l-80 80h-70v-20l60-60q-59 0-99.5-40.5T160-340Zm320-480q-120 0-173 15.5T231-760h501q-18-27-76.5-43.5T480-820ZM220-545h234v-155H220v155Zm440 60H220h520-80Zm-146-60h226v-155H514v155ZM335-315q23 0 39-16t16-39q0-23-16-39t-39-16q-23 0-39 16t-16 39q0 23 16 39t39 16Zm290 0q23 0 39-16t16-39q0-23-16-39t-39-16q-23 0-39 16t-16 39q0 23 16 39t39 16Zm-325 60h360q34 0 57-25t23-60v-145H220v145q0 35 23 60t57 25Zm180-505h252-501 249Z" />
      </svg>
    );
  }
  if (slug === "setting") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        viewBox="0 -960 960 960"
        width="100%"
      >
        <path d="m388-80-20-126q-19-7-40-19t-37-25l-118 54-93-164 108-79q-2-9-2.5-20.5T185-480q0-9 .5-20.5T188-521L80-600l93-164 118 54q16-13 37-25t40-18l20-127h184l20 126q19 7 40.5 18.5T669-710l118-54 93 164-108 77q2 10 2.5 21.5t.5 21.5q0 10-.5 21t-2.5 21l108 78-93 164-118-54q-16 13-36.5 25.5T592-206L572-80H388Zm92-270q54 0 92-38t38-92q0-54-38-92t-92-38q-54 0-92 38t-38 92q0 54 38 92t92 38Zm0-60q-29 0-49.5-20.5T410-480q0-29 20.5-49.5T480-550q29 0 49.5 20.5T550-480q0 29-20.5 49.5T480-410Zm0-70Zm-44 340h88l14-112q33-8 62.5-25t53.5-41l106 46 40-72-94-69q4-17 6.5-33.5T715-480q0-17-2-33.5t-7-33.5l94-69-40-72-106 46q-23-26-52-43.5T538-708l-14-112h-88l-14 112q-34 7-63.5 24T306-642l-106-46-40 72 94 69q-4 17-6.5 33.5T245-480q0 17 2.5 33.5T254-413l-94 69 40 72 106-46q24 24 53.5 41t62.5 25l14 112Z" />
      </svg>
    );
  }
  if (slug === "report") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        viewBox="0 -960 960 960"
        width="100%"
      >
        <path d="M120-120v-76l60-60v136h-60Zm165 0v-236l60-60v296h-60Zm165 0v-296l60 61v235h-60Zm165 0v-235l60-60v295h-60Zm165 0v-396l60-60v456h-60ZM120-356v-85l280-278 160 160 280-281v85L560-474 400-634 120-356Z" />
      </svg>
    );
  }
  if (slug === "cf") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        viewBox="0 -960 960 960"
        width="100%"
      >
        <path d="M271-120 80-311l192-192 42 42-120 120h646v60H194l119 119-42 42Zm418-337-42-42 119-119H120v-60h646L646-798l42-42 192 192-191 191Z" />
      </svg>
    );
  }
  if (slug === "home") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        viewBox="0 -960 960 960"
        width="100%"
      >
        <path d="M220-180h150v-250h220v250h150v-390L480-765 220-570v390Zm-60 60v-480l320-240 320 240v480H530v-250H430v250H160Zm320-353Z" />
      </svg>
    );
  }
  if (slug === "trash") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        viewBox="0 -960 960 960"
        width="100%"
      >
        <path d="M261-120q-24.75 0-42.375-17.625T201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166 0h60v-399h-60v399ZM261-750v570-570Z" />
      </svg>
    );
  }
  if (slug === "fire") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        viewBox="0 -960 960 960"
        width="100%"
      >
        <path d="M220-400q0 63 28.5 118.5T328-189q-4-12-6-24.5t-2-24.5q0-32 12-60t35-51l113-111 113 111q23 23 35 51t12 60q0 12-2 24.5t-6 24.5q51-37 79.5-92.5T740-400q0-54-23-105.5T651-600q-21 15-44 23.5t-46 8.5q-61 0-101-41.5T420-714v-20q-46 33-83 73t-63 83.5q-26 43.5-40 89T220-400Zm260 24-71 70q-14 14-21.5 31t-7.5 37q0 41 29 69.5t71 28.5q42 0 71-28.5t29-69.5q0-20-7.5-37T551-306l-71-70Zm0-464v132q0 34 23.5 57t57.5 23q18 0 33.5-7.5T622-658l18-22q74 42 117 117t43 163q0 134-93 227T480-80q-134 0-227-93t-93-227q0-128 86-246.5T480-840Z" />
      </svg>
    );
  }
}
