import { Box, Button, Text, TextField, Image } from '@skynexui/components'
import React from 'react';
import {useRouter} from 'next/router'

import appConfig from '../config.json';





//Texto Boas Vindas
function Title(props) {
    const Tag = props.tag || 'h1';
    return (
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
                ${Tag} {
                    color: ${appConfig.theme.colors.neutrals['000']};
                    font-size: 24px;
                    font-weight: 600;
                    }
            `}</style>
        </>

    );
}

// Componente React
/* HomePage() {
    return (
     <div>
         <GlobalStyle />
         <Title tag="h2"> Boas vindas de volta!</Title>
         <h2>Discord - Alura Matrix</h2>
         
    </div>
    )
  }*/

//export default HomePage

export default function PaginaInicial() {
    //const username = 'paulo-101';
    const [username, setUsername] = React.useState('')
    const roteamento = useRouter();
   

    return (
        <>
            
            <Box
                styleSheet={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backgroundColor: appConfig.theme.colors.primary[500],
                    backgroundImage: 'url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)',
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                }}
            >
                <Box
                    styleSheet={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: {
                            xs: 'column',
                            sm: 'row',
                        },
                        width: '100%', maxWidth: '700px',
                        borderRadius: '5px', padding: '32px', margin: '16px',
                        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                        backgroundColor: appConfig.theme.colors.neutrals[700],
                    }}
                >
                    {/* Formul??rio */}
                    <Box
                        
                        as="form"
                        onSubmit={function (infosDoEvento) {
                            infosDoEvento.preventDefault();
                            console.log('Algu??m submeteu o form')
                        
                            roteamento.push('/chat')
                            
                        }}
                        styleSheet={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                            width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
                        }}
                    >
                        <Title tag="h2">Boas vindas de volta!</Title>
                        <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>   
                         {appConfig.name} {/* <- Aqui est?? escrito Aluracord - Matrix */}
                        </Text>

                        {/* Alterando o nome e a foto quando digitar usuario
                        <input type="text"
                        value={username}
                        onChange={function handler (event) {
                            console.log('Usu??rio Digitou', event.target.value)
                            //Onde ta o valor?
                                const valor = event.target.value
                            // Trocar o valor da vari??vel
                            //atrav??s do React e avise quem precisar
                                setUsername(valor);
                        }} /> */}

                        

                        <TextField 
                            value={username}
                            onChange={function handler (event) {
                                console.log('Usu??rio Digitou', event.target.value)
                                //Onde ta o valor?
                                    
                                    //verifica quantos caracteres foram digitados
                                    
                                    const valor = event.target.value;
                                   
                                    
                                // Trocar o valor da vari??vel
                                //atrav??s do React e avise quem precisar
                                    setUsername(valor);
                                    
                            }}
                            fullWidth
                            textFieldColors={{
                                neutral: {
                                    textColor: appConfig.theme.colors.neutrals[200],
                                    mainColor: appConfig.theme.colors.neutrals[900],
                                    mainColorHighlight: appConfig.theme.colors.primary[500],
                                    backgroundColor: appConfig.theme.colors.neutrals[800],
                                },
                            }}
                        /> 
                        <Button
                            type='submit'
                            label='Entrar'
                            fullWidth
                            buttonColors={{
                                contrastColor: appConfig.theme.colors.neutrals["000"],
                                mainColor: appConfig.theme.colors.primary[500],
                                mainColorLight: appConfig.theme.colors.primary[400],
                                mainColorStrong: appConfig.theme.colors.primary[600],
                            }}
                        />
                    </Box>
                    {/* Formul??rio */}


                    {/* Photo Area */}
                    <Box
                        styleSheet={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            maxWidth: '200px',
                            padding: '16px',
                            backgroundColor: appConfig.theme.colors.neutrals[800],
                            border: '1px solid',
                            borderColor: appConfig.theme.colors.neutrals[999],
                            borderRadius: '10px',
                            flex: 1,
                            minHeight: '240px',
                        }}
                    >
                        <Image
                            styleSheet={{
                                borderRadius: '50%',
                                marginBottom: '16px',
                            }}
                            src={`https://github.com/${username}.png`}
                        />
                        <Text
                            variant="body4"
                            styleSheet={{
                                color: appConfig.theme.colors.neutrals[200],
                                backgroundColor: appConfig.theme.colors.neutrals[900],
                                padding: '3px 10px',
                                borderRadius: '1000px'
                            }}
                        >
                            {username}
                        </Text>
                    </Box>
                    {/* Photo Area */}
                </Box>
            </Box>
        </>
    );
}