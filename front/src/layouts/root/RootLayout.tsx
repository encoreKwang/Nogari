import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import { Stack, IconButton } from '@mui/material'
import { styled } from '@mui/material/styles'

import SideBar from './sideBar/SideBar'

import { postLogOut } from '@/apis/authApis'
import Iconify from '@/components/iconify'
import LoadingSpinner from '@/components/loading'
import { loadingInterceptors } from '@/components/loading/LoadingInterceptors'

function RootLayout() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    loadingInterceptors(setLoading)
  }, [])

  const logoutHandler = async () => {
    const response = await postLogOut()
    if (response.data.resultCode === 200) {
      sessionStorage.clear()
      window.location.replace('/')
    }
    // console.log(response)
  }

  return (
    <>
      {/* 좌측 패딩 */}
      <StyledLeftBodyPadding>
        {/* 검색, 로그아웃 */}
        <StyledIconPadding>
          <Stack direction="row" justifyContent="end" width="100%">
            <IconButton onClick={logoutHandler}>
              <Iconify icon={'ic:baseline-logout'} />
            </IconButton>
          </Stack>
        </StyledIconPadding>
        <SideBar />

        {/* 아울렛, 전체적인 패딩 */}
        <StyledContainer>
          <Outlet />
        </StyledContainer>
      </StyledLeftBodyPadding>
      {loading && <LoadingSpinner />}
    </>
  )
}

const StyledIconPadding = styled('div')({
  paddingTop: '30px',
  paddingLeft: '30px',
  paddingRight: '30px',
})

const StyledLeftBodyPadding = styled('div')({
  paddingLeft: '280px',
})

const StyledContainer = styled('div')(({ theme }) => ({
  marginLeft: '40px',
  marginRight: '40px',
}))

export default RootLayout
