import Image from "next/image";
import profilePic from "./images/profile-pic.png";
import styles from "./page.module.css";
import getBase64 from "./utils/getBase64";

export default async function Home() {
  const myBlurData = await getBase64("profile-pic.png");
  return (
    <>
      <h2>Hi I&apos;m Jeff</h2>
      <Image
        className={styles.profPic}
        src={profilePic}
        alt="Picture of Jeff"
        placeholder="blur"
        blurDataURL={myBlurData}
        height={400}
      />
      <p>
        You may know me from such things as Periphery&apos;s lighting guy or
        videographer, or being a scuba diver, or climber. Well truth is,
        I&apos;m all these things.
      </p>
      <p>
        &quot;How do you find the time?&quot; you ask? Well, its simple. I make
        the time. I make the time because its important. Don&apos;t waste time.
        Every day is finite.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Non odio euismod
        lacinia at quis risus sed. Diam maecenas sed enim ut sem viverra
        aliquet. Ut faucibus pulvinar elementum integer enim neque volutpat.
        Cursus euismod quis viverra nibh cras pulvinar mattis. Turpis cursus in
        hac habitasse platea dictumst quisque sagittis. Cursus in hac habitasse
        platea. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar
        sapien et. Nec dui nunc mattis enim ut tellus elementum sagittis vitae.
        Velit ut tortor pretium viverra. Quam quisque id diam vel. Vel orci
        porta non pulvinar. Mattis ullamcorper velit sed ullamcorper morbi
        tincidunt ornare massa eget.{" "}
      </p>
      <p>
        Dignissim sodales ut eu sem. Integer malesuada nunc vel risus commodo
        viverra maecenas accumsan lacus. Tempus urna et pharetra pharetra massa
        massa ultricies mi. Ullamcorper morbi tincidunt ornare massa. Auctor
        elit sed vulputate mi. Pulvinar sapien et ligula ullamcorper malesuada
        proin libero. Cursus euismod quis viverra nibh cras pulvinar mattis
        nunc. Euismod in pellentesque massa placerat. Sit amet venenatis urna
        cursus eget nunc. Quisque id diam vel quam elementum pulvinar. Amet nisl
        suscipit adipiscing bibendum est ultricies integer quis auctor.{" "}
      </p>
      <p>
        Enim sed faucibus turpis in eu mi bibendum neque. Erat velit scelerisque
        in dictum. Suspendisse faucibus interdum posuere lorem ipsum. Ut enim
        blandit volutpat maecenas volutpat blandit. Tristique nulla aliquet enim
        tortor at. Velit ut tortor pretium viverra suspendisse potenti nullam
        ac. Amet volutpat consequat mauris nunc congue nisi vitae suscipit. Urna
        nunc id cursus metus aliquam eleifend mi in. Tempor id eu nisl nunc mi
        ipsum faucibus vitae. Vestibulum lectus mauris ultrices eros in cursus
        turpis massa. Sollicitudin nibh sit amet commodo. Bibendum est ultricies
        integer quis auctor elit. Sed risus ultricies tristique nulla aliquet
        enim tortor. Nisl nunc mi ipsum faucibus vitae aliquet. Tincidunt arcu
        non sodales neque sodales ut etiam sit amet. Lacus viverra vitae congue
        eu consequat ac felis donec et. Netus et malesuada fames ac turpis
        egestas sed tempus. Proin nibh nisl condimentum id. Euismod in
        pellentesque massa placerat duis. Tristique nulla aliquet enim tortor at
        auctor urna. Sit amet nisl suscipit adipiscing bibendum. Consectetur
        adipiscing elit duis tristique sollicitudin. Adipiscing bibendum est
        ultricies integer. Sit amet cursus sit amet dictum sit. Consequat ac
        felis donec et odio pellentesque diam. Interdum velit euismod in
        pellentesque massa placerat duis. Parturient montes nascetur ridiculus
        mus mauris vitae. Arcu non sodales neque sodales ut etiam sit amet.
        Commodo nulla facilisi nullam vehicula. Habitant morbi tristique
        senectus et netus et malesuada fames ac. Eu nisl nunc mi ipsum faucibus
        vitae.
      </p>
    </>
  );
}
