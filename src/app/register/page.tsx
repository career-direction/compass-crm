import { Container } from "@mantine/core";
import { RegisterForm } from "@/features/auth/components/RegisterForm";

export default function RegisterPage() {
  return (
    <Container size={420} my={40}>
      <RegisterForm />
    </Container>
  );
}
