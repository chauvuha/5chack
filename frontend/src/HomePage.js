import React from "react";

const HomePage = () => {
  return (
    <div className="main-box">
      <img src="olive.png" alt="Logo" className="logo" />
      <h1>Hello Margaret!</h1>
      <div>
        <p>
          I’m O-live, here to help you feel safe without getting in the way. If
          something happens, I’ll gently alert your support network. You choose
          who gets alerted. I’m just here to help!
        </p>
        <div className="button-container">
          <div>
            <button
              onClick={() => {
                window.location.href = "/viewcameras";
              }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="23" viewBox="0 0 27 23" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.34121 4.575C2.39134 4.575 0 6.89043 0 9.74665V16.3393C0 19.9489 3.02208 22.875 6.75 22.875H20.25C23.9779 22.875 27 19.9489 27 16.3393V9.74665C27 6.89043 24.6087 4.575 21.6588 4.575C20.8041 4.575 20.0317 4.08184 19.6951 3.32122L19.277 2.3767C18.6388 0.934856 17.1746 0 15.5544 0H13.5H11.4456C9.82544 0 8.36121 0.934858 7.72302 2.3767L7.30495 3.32123C6.96829 4.08184 6.19586 4.575 5.34121 4.575ZM16.8 12.4179C16.8 10.6889 15.3455 9.24643 13.5 9.24643C11.6545 9.24643 10.2 10.6889 10.2 12.4179C10.2 14.1468 11.6545 15.5893 13.5 15.5893C15.3455 15.5893 16.8 14.1468 16.8 12.4179ZM13.5 7.74643C16.128 7.74643 18.3 9.81528 18.3 12.4179C18.3 15.0204 16.128 17.0893 13.5 17.0893C10.872 17.0893 8.7 15.0204 8.7 12.4179C8.7 9.81528 10.872 7.74643 13.5 7.74643Z" fill="#EEEEE4"/>
</svg>
              View my cameras
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                window.location.href = "/showallusers";
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="20"
                viewBox="0 0 36 27"
                fill="none"
              >
                <mask
                  id="path-1-outside-1_8_14"
                  maskUnits="userSpaceOnUse"
                  x="21.6223"
                  y="2.67488"
                  width="14"
                  height="22"
                  fill="black"
                >
                  <rect
                    fill="white"
                    x="21.6223"
                    y="2.67488"
                    width="14"
                    height="22"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M29.9287 23.4223C30.0119 23.4333 30.0951 23.4447 30.1783 23.4564L30.5963 23.515C32.4165 23.7704 34.045 22.3831 34.045 20.577V19.1987C34.045 17.907 33.2183 16.7548 31.9799 16.3204C30.5492 15.8184 29.0721 15.4916 27.581 15.3399C29.1369 16.4648 30.1018 18.2863 30.1018 20.2736V21.9848C30.1018 22.4818 30.0417 22.9631 29.9287 23.4223ZM23.6223 13.5063C24.2424 13.7623 24.9235 13.9037 25.6382 13.9037C28.5138 13.9037 30.8449 11.6139 30.8449 8.7893C30.8449 5.96468 28.5138 3.67488 25.6382 3.67488C25.553 3.67488 25.4683 3.67689 25.3841 3.68086C25.907 4.79455 26.1993 6.03804 26.1993 7.34979C26.1993 9.75948 25.2131 11.9388 23.6223 13.5063Z"
                  />
                </mask>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M29.9287 23.4223C30.0119 23.4333 30.0951 23.4447 30.1783 23.4564L30.5963 23.515C32.4165 23.7704 34.045 22.3831 34.045 20.577V19.1987C34.045 17.907 33.2183 16.7548 31.9799 16.3204C30.5492 15.8184 29.0721 15.4916 27.581 15.3399C29.1369 16.4648 30.1018 18.2863 30.1018 20.2736V21.9848C30.1018 22.4818 30.0417 22.9631 29.9287 23.4223ZM23.6223 13.5063C24.2424 13.7623 24.9235 13.9037 25.6382 13.9037C28.5138 13.9037 30.8449 11.6139 30.8449 8.7893C30.8449 5.96468 28.5138 3.67488 25.6382 3.67488C25.553 3.67488 25.4683 3.67689 25.3841 3.68086C25.907 4.79455 26.1993 6.03804 26.1993 7.34979C26.1993 9.75948 25.2131 11.9388 23.6223 13.5063Z"
                  fill="#EEEEE4"
                />
                <path
                  d="M30.1783 23.4564L30.3172 22.4661L30.3172 22.4661L30.1783 23.4564ZM29.9287 23.4223L28.9576 23.1833L28.6909 24.2671L29.7974 24.4137L29.9287 23.4223ZM30.5963 23.515L30.7353 22.5247H30.7353L30.5963 23.515ZM31.9799 16.3204L31.6489 17.264L31.9799 16.3204ZM27.581 15.3399L27.6822 14.3451L23.9768 13.9681L26.9951 16.1503L27.581 15.3399ZM23.6223 13.5063L22.9205 12.794L21.8445 13.8542L23.2407 14.4306L23.6223 13.5063ZM25.3841 3.68086L25.337 2.68198L23.8435 2.75247L24.4789 4.10589L25.3841 3.68086ZM30.3172 22.4661C30.2315 22.454 30.1458 22.4423 30.06 22.431L29.7974 24.4137C29.878 24.4244 29.9587 24.4354 30.0393 24.4467L30.3172 22.4661ZM30.7353 22.5247L30.3172 22.4661L30.0393 24.4467L30.4574 24.5053L30.7353 22.5247ZM33.045 20.577C33.045 21.7552 31.9742 22.6986 30.7353 22.5247L30.4574 24.5053C32.8588 24.8423 35.045 23.0111 35.045 20.577H33.045ZM33.045 19.1987V20.577H35.045V19.1987H33.045ZM31.6489 17.264C32.4953 17.5609 33.045 18.3409 33.045 19.1987H35.045C35.045 17.4732 33.9414 15.9487 32.311 15.3767L31.6489 17.264ZM27.4798 16.3348C28.8932 16.4786 30.2931 16.7883 31.6489 17.264L32.311 15.3767C30.8053 14.8485 29.251 14.5047 27.6822 14.3451L27.4798 16.3348ZM26.9951 16.1503C28.2957 17.0907 29.1018 18.6132 29.1018 20.2736H31.1018C31.1018 17.9594 29.978 15.8389 28.1669 14.5295L26.9951 16.1503ZM29.1018 20.2736V21.9848H31.1018V20.2736H29.1018ZM29.1018 21.9848C29.1018 22.4008 29.0515 22.8019 28.9576 23.1833L30.8997 23.6613C31.0319 23.1243 31.1018 22.5628 31.1018 21.9848H29.1018ZM23.2407 14.4306C23.9799 14.7358 24.7906 14.9037 25.6382 14.9037V12.9037C25.0564 12.9037 24.5048 12.7887 24.0039 12.5819L23.2407 14.4306ZM25.6382 14.9037C29.0491 14.9037 31.8449 12.183 31.8449 8.7893H29.8449C29.8449 11.0448 27.9785 12.9037 25.6382 12.9037V14.9037ZM31.8449 8.7893C31.8449 5.39561 29.0491 2.67488 25.6382 2.67488V4.67488C27.9785 4.67488 29.8449 6.53376 29.8449 8.7893H31.8449ZM25.6382 2.67488C25.5373 2.67488 25.4369 2.67726 25.337 2.68198L25.4313 4.67975C25.4998 4.67652 25.5687 4.67488 25.6382 4.67488V2.67488ZM24.4789 4.10589C24.9407 5.08935 25.1993 6.18799 25.1993 7.34979H27.1993C27.1993 5.88809 26.8734 4.49975 26.2893 3.25584L24.4789 4.10589ZM25.1993 7.34979C25.1993 9.48089 24.3283 11.4067 22.9205 12.794L24.3242 14.2186C26.0979 12.4709 27.1993 10.0381 27.1993 7.34979H25.1993Z"
                  fill="black"
                  mask="url(#path-1-outside-1_8_14)"
                />
                <mask
                  id="path-3-outside-2_8_14"
                  maskUnits="userSpaceOnUse"
                  x="-0.577339"
                  y="2.67488"
                  width="14"
                  height="22"
                  fill="black"
                >
                  <rect
                    fill="white"
                    x="-0.577339"
                    y="2.67488"
                    width="14"
                    height="22"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.11631 23.4223C5.03308 23.4333 4.94989 23.4447 4.86672 23.4564L4.44867 23.515C2.62849 23.7704 1 22.3831 1 20.577V19.1987C1 17.907 1.82665 16.7548 3.06503 16.3204C4.4958 15.8184 5.97289 15.4916 7.46397 15.3399C5.90813 16.4648 4.94313 18.2863 4.94313 20.2736V21.9848C4.94313 22.4818 5.00328 22.9631 5.11631 23.4223ZM11.4227 13.5063C10.8026 13.7623 10.1215 13.9037 9.40677 13.9037C6.53117 13.9037 4.20004 11.6139 4.20004 8.7893C4.20004 5.96468 6.53117 3.67488 9.40677 3.67488C9.49196 3.67488 9.57667 3.67689 9.66086 3.68086C9.13794 4.79455 8.8457 6.03804 8.8457 7.34979C8.8457 9.75948 9.83188 11.9388 11.4227 13.5063Z"
                  />
                </mask>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.11631 23.4223C5.03308 23.4333 4.94989 23.4447 4.86672 23.4564L4.44867 23.515C2.62849 23.7704 1 22.3831 1 20.577V19.1987C1 17.907 1.82665 16.7548 3.06503 16.3204C4.4958 15.8184 5.97289 15.4916 7.46397 15.3399C5.90813 16.4648 4.94313 18.2863 4.94313 20.2736V21.9848C4.94313 22.4818 5.00328 22.9631 5.11631 23.4223ZM11.4227 13.5063C10.8026 13.7623 10.1215 13.9037 9.40677 13.9037C6.53117 13.9037 4.20004 11.6139 4.20004 8.7893C4.20004 5.96468 6.53117 3.67488 9.40677 3.67488C9.49196 3.67488 9.57667 3.67689 9.66086 3.68086C9.13794 4.79455 8.8457 6.03804 8.8457 7.34979C8.8457 9.75948 9.83188 11.9388 11.4227 13.5063Z"
                  fill="#EEEEE4"
                />
                <path
                  d="M4.86672 23.4564L4.72776 22.4661L4.72777 22.4661L4.86672 23.4564ZM5.11631 23.4223L6.08733 23.1833L6.3541 24.2671L5.24762 24.4137L5.11631 23.4223ZM4.44867 23.515L4.3097 22.5247H4.30971L4.44867 23.515ZM3.06503 16.3204L3.39606 17.264H3.39606L3.06503 16.3204ZM7.46397 15.3399L7.36276 14.3451L11.0682 13.9681L8.04988 16.1503L7.46397 15.3399ZM11.4227 13.5063L12.1245 12.794L13.2005 13.8542L11.8043 14.4306L11.4227 13.5063ZM9.66086 3.68086L9.70801 2.68198L11.2015 2.75247L10.566 4.10589L9.66086 3.68086ZM4.72777 22.4661C4.81346 22.454 4.89921 22.4423 4.98501 22.431L5.24762 24.4137C5.16696 24.4244 5.08631 24.4354 5.00568 24.4467L4.72777 22.4661ZM4.30971 22.5247L4.72776 22.4661L5.00568 24.4467L4.58763 24.5053L4.30971 22.5247ZM2 20.577C2 21.7552 3.0708 22.6986 4.3097 22.5247L4.58763 24.5053C2.18618 24.8423 0 23.0111 0 20.577H2ZM2 19.1987V20.577H0V19.1987H2ZM3.39606 17.264C2.54969 17.5609 2 18.3409 2 19.1987H0C0 17.4732 1.10361 15.9487 2.734 15.3767L3.39606 17.264ZM7.56519 16.3348C6.15181 16.4786 4.7519 16.7883 3.39606 17.264L2.734 15.3767C4.2397 14.8485 5.79396 14.5047 7.36276 14.3451L7.56519 16.3348ZM8.04988 16.1503C6.74925 17.0907 5.94313 18.6132 5.94313 20.2736H3.94313C3.94313 17.9594 5.06701 15.8389 6.87807 14.5295L8.04988 16.1503ZM5.94313 20.2736V21.9848H3.94313V20.2736H5.94313ZM5.94313 21.9848C5.94313 22.4008 5.99344 22.8019 6.08733 23.1833L4.1453 23.6613C4.01312 23.1243 3.94313 22.5628 3.94313 21.9848H5.94313ZM11.8043 14.4306C11.065 14.7358 10.2544 14.9037 9.40677 14.9037V12.9037C9.98862 12.9037 10.5402 12.7887 11.0411 12.5819L11.8043 14.4306ZM9.40677 14.9037C5.99583 14.9037 3.20004 12.183 3.20004 8.7893H5.20004C5.20004 11.0448 7.06652 12.9037 9.40677 12.9037V14.9037ZM3.20004 8.7893C3.20004 5.39561 5.99583 2.67488 9.40677 2.67488V4.67488C7.06652 4.67488 5.20004 6.53376 5.20004 8.7893H3.20004ZM9.40677 2.67488C9.50769 2.67488 9.60812 2.67726 9.70801 2.68198L9.61371 4.67975C9.54522 4.67652 9.47623 4.67488 9.40677 4.67488V2.67488ZM10.566 4.10589C10.1043 5.08935 9.8457 6.18799 9.8457 7.34979H7.8457C7.8457 5.88809 8.17161 4.49975 8.75568 3.25584L10.566 4.10589ZM9.8457 7.34979C9.8457 9.48089 10.7166 11.4067 12.1245 12.794L10.7208 14.2186C8.94712 12.4709 7.8457 10.0381 7.8457 7.34979H9.8457Z"
                  fill="black"
                  mask="url(#path-3-outside-2_8_14)"
                />
                <path
                  d="M24.4065 7.34979C24.4065 3.56676 21.3397 0.5 17.5567 0.5C13.7737 0.5 10.7069 3.56676 10.7069 7.34979C10.7069 11.1328 13.7737 14.1996 17.5567 14.1996C21.3397 14.1996 24.4065 11.1328 24.4065 7.34979ZM25.4588 16.2291C20.3488 14.4041 14.7646 14.4041 9.65456 16.2291C7.94532 16.8395 6.80435 18.4586 6.80435 20.2736V21.9848C6.80435 24.5314 9.05984 26.4876 11.5808 26.1274L12.0907 26.0546C15.7163 25.5367 19.3971 25.5367 23.0227 26.0546L23.5326 26.1274C26.0536 26.4876 28.3091 24.5314 28.3091 21.9848V20.2736C28.3091 18.4586 27.1681 16.8395 25.4588 16.2291Z"
                  fill="#EEEEE4"
                  stroke="black"
                />
              </svg>
               View my network
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
