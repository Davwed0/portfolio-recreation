FROM alpine:latest

# Install necessary packages
# Note: BusyBox provides many basic Unix utilities (tar, gzip, bzip2, grep, sed, awk, etc.)
RUN apk add --no-cache \
    bash \
    openssh \
    shadow \
    nano \
    less \
    man-db \
    mandoc \
    man-pages \
    p7zip \
    coreutils \
    gawk \
    util-linux \
    findutils

# Set up SSH
RUN mkdir -p /var/run/sshd
RUN ssh-keygen -A
RUN sed -i 's/#PermitRootLogin.*/PermitRootLogin no/' /etc/ssh/sshd_config
RUN sed -i 's/#PasswordAuthentication.*/PasswordAuthentication yes/' /etc/ssh/sshd_config

# Create users level0-level19
RUN for i in $(seq 0 19); do \
    adduser -D -s /bin/bash level$i && \
    echo "level$i:level$i" | chpasswd; \
done

# Copy setup scripts
COPY setup-levels.sh /tmp/setup-levels.sh
RUN chmod +x /tmp/setup-levels.sh && /tmp/setup-levels.sh

# Copy documentation
COPY docs/ /home/docs/
RUN chmod -R 755 /home/docs

# Expose SSH port
EXPOSE 22

# Start SSH service
CMD ["/usr/sbin/sshd", "-D"]
