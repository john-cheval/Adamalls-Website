import React from 'react'
import PrivacyPolicyTemplate from "@/templates/privacy-policy/privacy-policy"
import { Axios } from '@/config/Axios';

async function getPageData() {
  const responce = await Axios.get(`/privacy-policy-page?populate=*`);
  return {
    page: responce.data?.data?.attributes
  }
}


const PrivacyPolicy = async () => {
  const {page} = await getPageData()

  return (
    <>
       <PrivacyPolicyTemplate/> 
    </>
  )
}

export default PrivacyPolicy