FROM nginx:alpine

# Delete Default files
#RUN rm /etc/nginx/conf.d/default.conf
RUN mkdir -p /var/www/something.com/

# Nginx healthcheck, service example
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD [ "service", "nginx", "status" ]

# Install amce.sh to issue SSL certificates
#RUN apk add wget openssl
#RUN wget -O - https://get.acme.sh | sh

# Try a "Hello World" HTML
COPY ./dist/* /var/www/something.com/
#COPY ./election.conf /etc/nginx/conf.d/

# Issue a certificate
# TODO Uncomment on an actual server
#RUN /root/.acme.sh/acme.sh --issue --nginx \
#        -d something.com \
#        -d www.something.com \ 
#        --keylength ec-256