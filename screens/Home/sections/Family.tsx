import { Box, Grid, Text, GridItem, Image } from '@chakra-ui/react'
import React from 'react'

export const FamilySection: React.FC = () => {
    return (
        <Grid templateColumns='repeat(6, 1fr)' templateRows='repeat(3, 1fr)' gap={3} p={10} 
        backgroundColor='white'>
            <GridItem 
            minHeight={40}
            backgroundImage='url(https://www.etapainfantil.com/wp-content/uploads/2017/08/perros-familia-700x467.jpg)'
            backgroundPosition='center center'
            backgroundSize='150% auto'
            borderRadius='2xl'
            ></GridItem>
            <GridItem
            backgroundImage='url(https://www.grupoyaakun.com/wp-content/uploads/2019/01/perro-familia.jpg)'
            backgroundPosition='center center'
            backgroundSize='150% auto'
            borderRadius='2xl' ></GridItem>
            <GridItem 
            backgroundImage='url(https://previews.123rf.com/images/stockbroker/stockbroker1507/stockbroker150706401/42310095-familia-que-se-relaja-en-jard%C3%ADn-con-perro-de-mascota.jpg)'
            backgroundPosition='center center'
            backgroundSize='100% auto'
            borderRadius='2xl' rowSpan={3} colSpan={2} >
                <Box display='flex' h='100%' justifyContent='center' alignItems='flex-end' padding={10}>
                    <Text fontSize='4xl' fontWeight={700} color='white' align='center'>Abraza la Familia</Text>
                </Box>
            </GridItem>
            <GridItem 
            backgroundImage='url(https://sumedico.blob.core.windows.net/images/2021/07/09/goldenretrieverconsufamilia.jpg)'
            backgroundPosition='center center'
            backgroundSize='150% auto'
            borderRadius='2xl' rowSpan={2} >
            </GridItem>
            <GridItem 
            backgroundImage='url(https://img.freepik.com/foto-gratis/nino-jugando-sus-perros-al-aire-libre-familia_23-2148647817.jpg?size=626&ext=jpg)'
            backgroundPosition='center center'
            backgroundSize='160% auto'
            borderRadius='2xl' ></GridItem>
            <GridItem colSpan={2}
            backgroundImage='url(https://gestion.portalbiesa.com/redaccio/arxius/imatges/201810/770_1538733285blog_post_familia_1.jpg)'
            backgroundPosition='center center'
            backgroundSize='100% auto'
            borderRadius='2xl'
            >
            </GridItem>
            <GridItem 
            backgroundImage='url(https://www.hola.com/imagenes/mascotas/20211014197674/educar-ninos-perros-convivencia-sin-problema-dn/1-6-902/como-educar-perros-ninos-convivencia-sin-problemas-t.jpg)'
            backgroundPosition='center center'
            backgroundSize='150% auto'
            borderRadius='2xl' ></GridItem>
            <GridItem 
            backgroundImage='url(https://blog-cdn.dogbuddy.com/wp-content/uploads/2016/04/child-with-a-dog-e1461229430570.jpg)'
            backgroundPosition='center center'
            backgroundSize='150% auto'
            borderRadius='2xl' ></GridItem>
            <GridItem 
            backgroundImage='url(https://www.mdzol.com/u/fotografias/m/2021/5/1/f608x342-1051087_1080810_15.jpg)'
            backgroundPosition='center center'
            backgroundSize='160% auto'
            borderRadius='2xl' ></GridItem>
            <GridItem colSpan={2}
                backgroundImage='url(https://www.65ymas.com/uploads/s1/18/90/26/primeras-pautas-a-seguir-con-un-perro-recie-n-adoptado.jpeg)'
                backgroundPosition='center center'
                backgroundSize='100% auto'
                borderRadius='2xl'
            >
                {/* <Image
                src='https://www.65ymas.com/uploads/s1/18/90/26/primeras-pautas-a-seguir-con-un-perro-recie-n-adoptado.jpeg'
                borderRadius='2xl'
                />
                */}
                
            </GridItem>
        </Grid>
    )
}

export default FamilySection