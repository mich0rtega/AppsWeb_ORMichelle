from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractUser
from .manager import UserManager



################ - PRODUCTOS - ################
#Tabla Categoria
class Categoria(models.Model):
    id_categoria = models.AutoField(primary_key=True)
    nombre_categoria = models.TextField(max_length=100)
    referencia_categoria = models.CharField(max_length=20)

    def __str__(self):
        return self.nombre_categoria
    
#Tabla Productos
class Producto(models.Model):
    cod_producto = models.CharField(max_length=10, primary_key=True)
    nombre = models.TextField(max_length=40)
    descripcion = models.CharField(max_length=100)
    referencia = models.CharField(max_length=30)
    modelo = models.CharField(max_length=100)
    marca = models.CharField(max_length=100)
    precio = models.DecimalField(max_digits=10,decimal_places=2)
    stock = models.IntegerField()
    product_image = models.ImageField(upload_to='productos/', blank=True)
    #llaves foraneas
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE)
    
    
    def __str__(self):
        return self.nombre
    

################ - USUARIOS - ################
#Tabla Rol
class Rol(models.Model):
    id_rol = models.AutoField(primary_key=True)
    nombre_rol = models.CharField(max_length=60, unique=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    def __str__(self):
        return self.nombre_rol

#Tabla Usuarios
class Usuarios(AbstractUser):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=20, unique=True)
    password = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    user_profile_image = models.ImageField(upload_to='Perfil/', blank=True, null=True)
    rol = models.ForeignKey(Rol, on_delete=models.CASCADE, default=1)

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['role','email']
    objects = UserManager()

    def __str__(self):
        return self.username
    
    @property
    def is_active(self):
        return self.rol.is_active

    @property
    def is_staff(self):
        return self.rol.is_staff

    @property
    def is_superuser(self):
        return self.rol.is_superuser


#Tabla Ventas
class Ventas(models.Model):
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
    referencia = models.TextField(max_length=40)
    uv = models.IntegerField()
    pv = models.DecimalField(max_digits=10, decimal_places=2)
    amt = models.DecimalField(max_digits=10, decimal_places=2)
    
