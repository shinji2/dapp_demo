# Dapp Architecture

## Web2 vs Web3

intro for web2 devs to begin their web3 journey

Web2 charateristics:
- existance of authority
- centralized architecture fully controlled by the company
- can censor content or ban users, not permissionless


Pros:
- Authority can ban/censor bad actors
- Scalability. Unlimited computing power. (data-center level of computing power, as long as you can afford it)
- better UX, customer support.


Cons:
- multiple points of failure
- authority can ban/censor anyone
- the system can be shut down by the owner(authority) at any time
- rely on trust of the authority


Web3 charateristics:
- decentralized architecture.
- no one can censor content
- (possible to configure the system, in a way that is verifiable, such that) it is permissionless

Cons:
- difficult to ban/censor bad actors
- rely on trust of the authority
- limited computing power(no machine learning, only the most important data is on the blockchain, and we distribute the frontend that can intepret that data)
- not easily to be scalable, at the same time, not compromising decentralization
- UX that is difficult to use. Hard to provide customer support.
- requirement of the users to be educated. (know the risks and, to some extent, the mechanism of the protocol. The concept of addresses, private & public keys, LP tokens, approvals, etc, that is low-level)


Pros:
- reduced single points of failure
- (possible to configure the system, in a way that is verifiable, such that) the system cannot be shut down by the owner(authority) at any time
- permissionless.



[web2 vs web3 architecture diagram]
[web2 diagram]
(source: https://www.evertop.pl/en/frontend-vs-backend/)
[web3 diagram]
(source: https://thenewstack.io/web3-architecture-and-how-it-compares-to-traditional-web-apps/)

## Different aspects of decentralization (chains, and dapp):
- blockchain level: high number of validators. permissionless and low requirement of being a validator. high cost of malicious act (double spending, spamming).
- distribution of wealth. how tokens are minted, to whom. (tokenomics, dyor)
- dapp architecture. Tech stack. Technical components. (no downtime, no single-point-of-failure)
- 


Technical components: decentralized versions of existing web2 services.
Decentralized versions of existing web2 services.

 we need to make sure each of them won't become a single point of failure / surface to attack.
- static hosting/content sharing: AWS CDN -> IPFS
- domain name system: Traditional DNS (goDaddy, Namecheap) -> ENS, Avvy
- Data: Database, ETL servers (postgresql) -> subgraph
- Computing: Backend servers -> Smart contracts
- Repository: closed-source -> open-source


[web3 architecture diagram]
(source: https://thenewstack.io/web3-architecture-and-how-it-compares-to-traditional-web-apps/)

Platypus Dapp Architecture:
- early protocols. as we have not fully transitioned into a DAO yet. it's a very important tasks for our roadmap.
- avoid backend servers
- avoid closed-sources repos. open sourcing once it's audited.

