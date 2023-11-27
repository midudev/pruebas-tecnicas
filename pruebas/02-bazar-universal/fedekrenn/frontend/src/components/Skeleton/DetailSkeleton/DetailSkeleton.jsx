import { Skeleton, Box } from '@mui/material'

export default function DetailSkeleton() {
  return (
    <>
      <Box spacing={2} sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Skeleton animation='wave' variant='circular' width={200} height={200} />
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <Skeleton animation='wave' variant='circular' width={50} height={50} />
          <Skeleton animation='wave' variant='circular' width={50} height={50} />
          <Skeleton animation='wave' variant='circular' width={50} height={50} />
        </Box>
      </Box>
      <Skeleton animation='wave' variant='text' width={250} height={50} sx={{ margin: '20px auto' }} />
      <Box sx={{ display: 'flex', justifyContent: 'space-around', width: '80%', margin: '0 auto' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <Skeleton animation='wave' variant='text' width={70} height={30} />
          <Skeleton animation='wave' variant='text' width={70} height={30} />
        </Box>
        <Skeleton animation='wave' variant='text' width={50} height={30} />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px' }}>
        <Skeleton animation='wave' variant='text' width={250} height={30} />
        <Skeleton animation='wave' variant='text' width={250} height={30} />
        <Skeleton animation='wave' variant='text' width={250} height={30} />
      </Box>
    </>
  )
}
