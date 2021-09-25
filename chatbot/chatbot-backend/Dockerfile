FROM tiangolo/uwsgi-nginx-flask:python3.8

RUN apt-get update -y && \
    apt-get install -y python-pip python-dev

RUN apt-get -y install libc-dev
RUN apt-get -y install build-essential
RUN pip install cython

RUN pip install -U pip setuptools wheel



COPY app /app
COPY requirements.txt /var/www/requirements.txt


RUN pip install -r /var/www/requirements.txt
RUN pip install git+https://github.com/gunthercox/chatterbot-corpus.git#egg=chatterbot-corpus

