# Prueba técnica

Aquí se explicarán los procedimientos, librerías y decisiones tomadas durante esta prueba técnica.

## Frontend

### Librerías utilizadas

- **Styled components**
- **i18n**: He querido utilizar esta librería de traducciones, primero para prevenir el uso de literales en los componentes y porque es un estándar en cuanto a desarrollo web. Existen dos archivos de traducciones, español (**es.json**) e inglés (**en.json**).
- **Radix**: Es una libería de componentes paredida a Material UI. Pero no he instalado todo el paquete, sólo los componentes que he necesitado, estos han sido el Dialog (@radix-ui/react-dialog) y el Switch (@radix-ui/react-switch) que desactiva un alumno.

### Procedimientos

- **StudentsProvider**: Para un mejor control sobre los datos de los estudiantes, y la paginación he querido hacer un Provider, con su hook **useStudents** para poder utilizarlo en cualquer parte de la aplicación que esté contenida por el StudentsProvider. Este archivo llama a las funciones que interactúan con la api, dentro de la carpeta "**services**". De esta manera el estado de la base de datos y del front es el mismo continuamente.
- **useIsMobile hook**: He realizado un hook para que sea sencillo ver cuándo la pantalla del dispositivo es más pequeña. Para las veces en las que sea más cómodo tener componentes diferentes para un tipo de pantalla u otro, por ejemplo el menú de la aplicación.

## Backend

### Liberías utilizadas

- **uuid**: A la hora de crear nuevos alumnos, la mejor opción me ha parecido "**uuidv4**" ya que es un estándar.

### Procedimientos

- **Estructura**: He hecho una estructura de módulos, el estándar de NestJS, en este caso he creado un módulo de students con las siguientes carpetas y archivos dentro:
  - _DTO_: He creado dos dto, uno para la creación de estudiantes y otro para la actualización. Si la API recibe propiedades que no están dentro de ese dto, el backend los ignorará.
  - _Entities_: Aquí está el modelo como tal de "Student" con sus propiedades tipadas.
  - _Controller_: Este archivo recibe las llamadas con la ruta y el método HTTP correspondiente y devuelve la respuesta del Service
  - _Service_: Este archivo realiza las operaciones correspondientes con el archivo utliazado para la base de datos (DB.json).
    - **Función normalizeId**: Al ser el json un export de un mongo, he querido hacer una función para que sea más facil trabajar con cada registro, haciendo que el id sea un string en vez de un objeto.
