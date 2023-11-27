import { Skeleton, Box } from '@mui/material'

export default function ResultsSkeleton() {
  return (
    <>
      <Box sx={{ margin: '10px 0 50px 0' }}>
        <Skeleton animation='wave' variant='text' width='80%' height={40} sx={{ margin: '0 auto' }} />
        <Skeleton animation='wave' variant='text' width='80%' height={40} sx={{ margin: '0 auto' }} />
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Skeleton animation='wave' variant='circular' width={100} height={100} />
        <Box sx={{ ml: 2 }}>
          <Skeleton animation='wave' variant='text' width={215} height={30} />
          <Skeleton animation='wave' variant='text' width={215} height={30} />
          <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
            <Skeleton animation='wave' variant='text' width={50} height={30} />
            <Skeleton animation='wave' variant='text' width={50} height={30} />
          </Box>
        </Box>
      </Box>
    </>
  )
}
