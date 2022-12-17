import {useState} from 'react'
import {
  Container,
  CardContainer,
  Head,
  Text,
  Input,
  ErrorText,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setState] = useState('')

  const onChangeInput = event => {
    setState(event.target.value)
  }

  return (
    <Container>
      <CardContainer>
        <Head>Password Validator</Head>
        <Text>Check how strong and secure is your password</Text>
        <Input type="password" onChange={onChangeInput} value={password} />
        {password.length <= 8 && (
          <ErrorText>Your password must be at least 8 characters </ErrorText>
        )}
      </CardContainer>
    </Container>
  )
}

export default PasswordValidator
