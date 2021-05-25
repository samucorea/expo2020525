print("Inserte la operación a realizar.(+ -): ")

operacion = input()
num1 = 0
num2 = 0
resultado = 0

print("Inserte el primer número: ")
num1 = int(input())
print("Inserte el segundo número: ")
num2 = int(input())

if operacion == "+":
    resultado = num1 + num2
elif operacion == "-":
    resultado = num1 - num2

print(f'El resultado es {resultado}')
