FROM mongo:4.2.3-bionic

#? Would it be easeir to use the init to check service status?

HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD [ "./mongo_healthcheck.sh" ]