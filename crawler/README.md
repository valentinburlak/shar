# Crawler (Веб паук парсер)

Необходимые библиотеки
  - requests  (https://2.python-requests.org/en/master/)
  - html parser (https://docs.python.org/3/library/html.parser.html)

# Задача
Создать скрипт, который принимает на вход ссылку википедии 
(пример ссылки - https://en.wikipedia.org/wiki/Visa_requirements_for_Moldovan_citizens). 
Скрипт должен собрать список стран в которые виза не нужна (все не красные поля) и сохранить результат в 
виде отсортированного списка стран от А до Я в файл под названием ссылки (пример:
Visa_requirements_for_Moldovan_citizens.txt).
 Пример результата для https://en.wikipedia.org/wiki/Visa_requirements_for_Moldovan_citizens:

> Albania   
> Andorra   
> Antigua and Barbuda   
> ...   
   

