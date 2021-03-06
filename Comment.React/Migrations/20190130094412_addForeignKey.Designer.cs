﻿// <auto-generated />
using Comment.React.Repository;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Comment.React.Migrations
{
    [DbContext(typeof(CommentDbContext))]
    [Migration("20190130094412_addForeignKey")]
    partial class addForeignKey
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.0-rtm-35687")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Comment.React.Models.CommentModel", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Content");

                    b.Property<string>("DateFormatted");

                    b.Property<string>("Email")
                        .HasMaxLength(500);

                    b.Property<int>("Like");

                    b.Property<string>("ParentId");

                    b.HasKey("Id");

                    b.HasIndex("Email");

                    b.ToTable("Comments");
                });

            modelBuilder.Entity("Comment.React.Models.UserModel", b =>
                {
                    b.Property<string>("Email")
                        .ValueGeneratedOnAdd()
                        .HasMaxLength(500);

                    b.Property<string>("FirstName");

                    b.Property<string>("FullName");

                    b.Property<string>("Image");

                    b.Property<string>("LastName");

                    b.Property<string>("Type");

                    b.HasKey("Email");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("Comment.React.Models.CommentModel", b =>
                {
                    b.HasOne("Comment.React.Models.UserModel", "User")
                        .WithMany("Comments")
                        .HasForeignKey("Email");
                });
#pragma warning restore 612, 618
        }
    }
}
