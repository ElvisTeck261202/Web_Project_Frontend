import { React } from 'react';
import { Navbar } from '../components/Navbar';

export function VIP (){

   return(
    <>
    <Navbar/>
          <div className="flex flex-wrap place-items-center">
        <div
          className="m-9 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 mx-8"
        >
          <img
            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="https://images3.memedroid.com/images/UPLOADED271/60491bd580ab2.jpeg"
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              PC Gamer
            </h5>
            <p class="mb-3 font-normal text-gray-700 ">
              Intel Core i20 10th Gen 10-Core 3.6 GHz, 32GB RAM, 1TB SSD, NVIDIA GeForce RTX 4090 Ti 300GB GDDR6, Windows 13 Home
            </p>
          </div>
        </div>
        <div
          class="m-9 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100"
        >
          <img
            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="https://i.scdn.co/image/3e8924d334900f87e533ebb58eb4e0261e9b233d"
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
             Valentin Elizalde
            </h5>
            <p class="mb-3 font-normal text-gray-700 ">
              You can be the special guest of one of the concerts of Valentin Elizalde
            </p>
          </div>
        </div>

        <div
          class="m-9 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 mx-8"
        >
          <img
            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="https://img.freepik.com/fotos-premium/retrato-carpincho-vestido-como-capitan-mar-al-timon-ai-generativo_124507-65856.jpg"
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              Capibara
            </h5>
            <p class="mb-3 font-normal text-gray-700 ">
              You can get a capibara... sometimes talks about the return of the soviet union but it's part of the race
            </p>
          </div>
        </div>
        <div
          class=" m-9 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100"
        >
          <img
            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="https://www.eluniversal.com.mx/resizer/GnlNvcakEAMd1TWcJWdqoouM7Yo=/1100x666/cloudfront-us-east-1.images.arcpublishing.com/eluniversal/D3UEHHC2JVEENFB2FN535BR7TU.jpg"
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              Checo Perez
            </h5>
            <p class="mb-3 font-normal text-gray-700 ">
              Autograph and photo with the F1 pilot Checo Perez
            </p>
          </div>
        </div>
      </div>
    </>
    ); 

}
