import { Container } from "@mantine/core";
import { LoginForm } from "@/features/auth/components/LoginForm";

export default function LoginPage() {
  return (
    <Container size={420} my={40}>
      <LoginForm />
    </Container>
  );
}
