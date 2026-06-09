
export default function Home() {
  return (
    <div>
      Vær nå værede nettverks oppset ser:
      <img className=" h-150" src="logseq_Netverks skisse.png" alt="" />
      <div className="bg-lightgray m-5 border-solid border-blue">
        enable
          <div className="ml-5">
            config term <br />
            vlan 10 <br />
            name bedrift_1 <br />
            vlan 20 <br />
            name bedrift_2 <br />
            exit <br />
            <br />
            int fa0/1 <br />
            switchport mode access <br />
            switchport access vlan 10 <br />
            <br />
            int fa0/2 <br />
            switchport mode access <br />
            switchport access vlan 20 <br />
            <br />
            int fa0/24<br />
            switchport mode trunk<br />
            <br />
            ip access-list extended BLOCK_VLANS<br />
            deny ip 10.1.10.0 0.0.0.255 10.1.20.0 0.0.0.255<br />
            deny ip 10.1.20.0 0.0.0.255 10.1.10.0 0.0.0.255<br />
            permit ip any 10.1.30.0 0.0.0.255<br />
            </div>
      </div>
      
    </div>
  );
}
