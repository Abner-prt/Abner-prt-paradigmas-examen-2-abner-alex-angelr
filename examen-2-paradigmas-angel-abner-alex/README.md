# Calculadora de Cuenta de Ahorros

Una aplicacion web frontend diseñada para simular el crecimiento de una cuenta de ahorros mediante interes compuesto con capitalizacion mensual.

## Equipo de Desarrollo
- Abner
- Alex
- Angel

## Tecnologias Utilizadas
- **React 19**
- **TypeScript**
- **Vite**
- **Tailwind CSS 4**
- **React Router v7**

## Instrucciones para Ejecutar el Proyecto

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Abner-prt/Abner-prt-paradigmas-examen-2-abner-alex-angelr.git
   ```
2. Navegar a la carpeta e instalar dependencias:
   ```bash
   cd examen-2-paradigmas-angel-abner-alex
   npm install
   ```
3. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Vistas de la Aplicacion
1. **Formulario**: Captura el deposito inicial, la tasa de interes anual y el plazo en años. Validado para asegurar datos correctos antes del calculo.
2. **Proyeccion Mensual**: Tabla que desglosa mes a mes el saldo acumulado y el interes generado durante cada periodo mensual.
3. **Proyeccion Anual**: Tabla que resume año tras año el saldo al cierre y el total de intereses generados en dicho año.

## Formula de Interes Compuesto Utilizada
El calculo asume una capitalizacion mensual constante:
- `Saldo(n) = P * (1 + i)^n`
Donde `P` es el capital inicial, e `i` es la tasa de interes mensual (tasa anual / 12).
