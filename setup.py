from setuptools import setup

exec (open('dash_sortable_select/version.py').read())

setup(
    name='dash_sortable_select',
    version=__version__,
    author='peteshub',
    packages=['dash_sortable_select'],
    include_package_data=True,
    license='MIT',
    description='Sortable Select',
    install_requires=[]
)
